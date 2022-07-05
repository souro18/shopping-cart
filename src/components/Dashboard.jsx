import React, { useCallback, useEffect, useState } from "react";
import { getProducts } from "../api";
import { getFilteredProducts, getFilterOptions, getUpdatedFilter } from "../helpers";
import Filter from "./Filter";
import Products from "./Products";

const Dashboard = (props) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState({});
    // const [selectedFilters, setSelectedFilters] = useState([]);

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
       console.log(newFilters, filteredProducts)
       setFilteredProducts(filteredProducts);
       setFilters(newFilters);
    }, [filters]);
    
    return <div className="app-container d-flex flex-one flex-row-wrapper">
        <Filter filters={filters} onFilterClick={onFilterClick}/>
        <Products products={filteredProducts} addToCart={props.addToCart} cart={props.cart} removeItem={props.removeItem}/>
    </div>
}

export default Dashboard;