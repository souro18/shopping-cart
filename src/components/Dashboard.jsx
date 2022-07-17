import React, { useCallback, useEffect, useState } from "react";
import { getProducts } from "../api";
import { getFilteredProducts, getFilterOptions, getTextFilteredProducts, getUpdatedFilter } from "../helpers";
import Filter from "./Filter";
import Products from "./Products";

const Dashboard = (props) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState({});
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        if(products.length === 0) {
            getProducts().then(data => {
                const filters = getFilterOptions(data);
                setProducts(data);
                setFilteredProducts(data);
                setFilters(filters);
            });
        }
    }, []);

    const onFilterClick = useCallback((filterType, filterKey) => {
       const newFilters = getUpdatedFilter(filters, filterType, filterKey);
       const filteredProducts = getFilteredProducts(products, newFilters);
       setFilteredProducts(getTextFilteredProducts(filteredProducts, searchText));
       setFilters(newFilters);
    }, [filters, searchText]);


    useEffect(() => {
        const filteredProducts = getFilteredProducts(products, filters);
        setFilteredProducts(getTextFilteredProducts(filteredProducts, searchText));
    }, [searchText]);

    
    
    return <div>
        <div className={props.showMobileFilter ? 'filter-mobile' : 'hide'}>
          <Filter filters={filters} onFilterClick={onFilterClick}/>
        </div>
        <div className="app-container d-flex flex-one flex-row-wrapper">
        <div className="d-flex flex-col-wrapper flex-one filter-desktop" >
         <div className="box-shadow">
          <Filter filters={filters} onFilterClick={onFilterClick}/>
          </div>
        </div>
        
        <Products
         onSearchText={setSearchText}
         products={filteredProducts}
          addToCart={props.addToCart}
           cart={props.cart}
        removeItem={props.removeItem}

        />
    </div>
    </div>
}

export default Dashboard;