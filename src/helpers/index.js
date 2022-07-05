import { FILTERS, FILTER_OPTIONS, FILTER_TYPES } from "../constants";

const formatFilterOptions = (items) => {
    return items.map(item => {
        return {
            key: item.toLowerCase(),
            displayName: item
        }
    })
};

const getUniqValuesOfParam = (items, param) => {
    const uniqSet = new Set();
    items.forEach(item => { uniqSet.add(item[param])});
    return formatFilterOptions(Array.from(uniqSet))
}

const getFilterOptions = (products) => {
    const colorFilterOptions = getUniqValuesOfParam(products, 'color');
    const typeFilterOptions = getUniqValuesOfParam(products, 'type');
    FILTER_OPTIONS[FILTERS.COLOR].filterOptions = colorFilterOptions;
    FILTER_OPTIONS[FILTERS.TYPE].filterOptions = typeFilterOptions;
    console.log(FILTER_OPTIONS);
    return FILTER_OPTIONS;
}

const itemPresentInCart = (items, itemId) => {
    return Object.keys(items).includes(itemId.toString())
}

const getUpdatedFilter = (filters, filterType, filterKey ) => {
    const newFilters = { ...filters};
        const filterValue = newFilters[filterType].filterOptions.find(option => option.key === filterKey).displayName;
        const index = newFilters[filterType].selectedFilters.findIndex(option => option === filterValue)
        if(index >= 0) {
            newFilters[filterType].selectedFilters.splice(index, 1)
        } else {
            newFilters[filterType].selectedFilters.push(filterValue);
        }
        return newFilters;
}

const getFilteredProducts = (products, filters) => {
    const filterTypes = Object.keys(filters);
    return products.filter(product => {
        let isItemSelected = true;
        filterTypes.forEach(option => {
            if(filters[option].filterType === FILTER_TYPES.RANGE) {
                let min = Infinity;
                let max = -Infinity;
                filters[option].selectedFilters.forEach(selectedOption => {
                   const range = filters[option].filterOptions.find(option => option.displayName === selectedOption).value;
                   min = Math.min(min, range.min);
                   max = Math.max(max, range.max)
                })
                if(product.price < min || product.price > max) {
                    isItemSelected = false;
                }
            }
            else if(filters[option].selectedFilters.length > 0 && !filters[option].selectedFilters.includes(product[option])) {
                isItemSelected = false;
            }
        })
        return isItemSelected;
    })
}
export { getFilterOptions, itemPresentInCart, getUpdatedFilter, getFilteredProducts };