const FILTERS = {
    PRICE_RANGE: 'price',
    COLOR: 'color',
    GENDER: 'gender',
    TYPE: 'type'
};

const FILTER_TYPES = {
    CHECKBOX: 'checkbox',
    RADIO: 'radio',
    RANGE: 'range',
}

const GENDER = {
    MEN: 'Men',
    WOMEN: 'Women'
}

const FILTER_OPTIONS = {
    [FILTERS.COLOR]: {
        key: FILTERS.COLOR,
        selectorType: FILTER_TYPES.CHECKBOX,
        filterType: FILTER_TYPES.CHECKBOX,
        displayName: 'Colour',
        filterOptions: [],
        selectedFilters: []
    },
    [FILTERS.GENDER]: {
        key: FILTERS.GENDER,
        selectorType: FILTER_TYPES.CHECKBOX,
        filterType: FILTER_TYPES.CHECKBOX,
        displayName: 'Gender',
        selectedFilters: [],
        filterOptions: [{
            key: GENDER.MEN,
            displayName: GENDER.MEN
        }, {
            key: GENDER.MEN,
            displayName: GENDER.WOMEN
        }]
    },
    [FILTERS.TYPE]: {
        key: FILTERS.TYPE,
        selectorType: FILTER_TYPES.CHECKBOX,
        filterType: FILTER_TYPES.CHECKBOX,
        displayName: 'Type',
        filterOptions: [],
        selectedFilters: []
    },
    [FILTERS.PRICE_RANGE]: {
        key: FILTERS.PRICE_RANGE,
        selectorType: FILTER_TYPES.CHECKBOX,
        filterType: FILTER_TYPES.RANGE,
        displayName: 'Gender',
        selectedFilters: [],
        filterOptions: [{
            key: 'range1',
            displayName: 'Below 250',
            value: {
                min: 0,
                max: 249
            }
        }, {
            key: 'range2',
            displayName: '250 - 450',
            value: {
                min: 250,
                max: 450,
            }
        }, {
            key: 'range3',
            displayName: 'Above 450',
            value: {
                min: 450,
                max: Infinity,
            }
        }]
    },
}

export { FILTER_OPTIONS, FILTERS, FILTER_TYPES };