import { FILTERS, FILTER_OPTIONS } from "../constants";

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

export { getFilterOptions, itemPresentInCart };