import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './style.css';
import ListItem from '../../components/ListItem'



const Product = () => {
    const [products, setProducts] = useState([]);

    function getProducts() {
        axios.get('http://localhost:3001/api/product')
            .then(response => {
                setProducts(response.data.products) 
            })
    }

    useEffect(() => {
        getProducts()
    }, [])
    
    return (
        <>
            <div className='container' style={{  width: '100%', height: '100vh' }}>
                <h1>Produtos</h1>

                <div className='products' style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-around', flexDirection: 'row', width: '100%', height: '100%'}}>
                    <ListItem className='product' products={products}/>
                </div>
            </div>
        </>
    )
}
export default Product;
