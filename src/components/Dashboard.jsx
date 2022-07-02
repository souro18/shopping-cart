import React, { useEffect, useState } from "react";
import { getProducts } from "../api";
import { getFilterOptions } from "../helpers";
import Filter from "./Filter";
import Products from "./Products";

const Dashboard = (props) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState({});
    const [selectedFilters, setSelectedFilters] = useState([]);

    useEffect(() => {
        getProducts().then(data => {
            const filters = getFilterOptions(data);
            setProducts(data);
            setFilteredProducts(data);
            setFilters(filters);
        });
    }, []);
    
    return <div className="app-container d-flex flex-one flex-row-wrapper mt-20">
        <Filter />
        <Products products={filteredProducts} addToCart={props.addToCart} cart={props.cart}/>
    </div>
}

export default Dashboard;