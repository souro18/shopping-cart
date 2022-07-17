import React from 'react';

const Filter = ({ filters, onFilterClick}) => {
    
    return <div>
        {
            Object.keys(filters).map(filterType => {
                return <div className="pa-16">
                    <h5 className="mb-10">{filters[filterType].displayName}</h5>
                    {
                        filters[filterType].filterOptions.map(option => {
                            return <div onClick={() => onFilterClick(filterType, option.key)} className="mb-5">
                                <input type="checkbox" id={option.key} value={option.displayName} checked={filters[filterType].selectedFilters.includes(option.displayName)}/>
  <label for={option.id}> {option.displayName}</label>
                            </div>
                        })
                    }
                </div>
            })
        }
        </div>
};

export default Filter;