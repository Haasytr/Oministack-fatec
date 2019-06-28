import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './styles.css';
import ListItem from '../ListItem'

const List = () => {
    // Lógica do componente
    const [products, setProducts] = useState([]);

    function getProducts() {
        axios.get('http://localhost:3001/api/product')
            .then(response => {
                const products = response.data.products.slice(-4)
                setProducts(products) 
            })
    }

    useEffect(() => {
        getProducts()
    }, [])

    // Renderização do componente
    return (
        <>
            <div className="list-container">
                <ListItem products={products} />
            </div>
        </>
    )

};

export default List;
