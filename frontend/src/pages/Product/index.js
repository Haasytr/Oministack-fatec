import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './style.css';
import ListItem from '../../components/ListItem'
import { wrap } from 'module';



const Product = () => {
    const [products, setProducts] = useState([]);

    function getProducts() {
        axios.get('http://localhost:3001/api/product')
            .then(response => {
                const products = response.data.products.slice(-6)
                setProducts(products) 
            })
    }

    useEffect(() => {
        getProducts()
    }, [])
    
    return (
        <>
            <div className='container' style={{   width: '100%', height: '100vh' }}>
                

                <div className='products' style={{display: 'flex', marginTop: '10%', alignItems: 'flex-start', justifyContent: 'space-around', flexDirection: 'row', flexWrap: 'wrap', width: '100%', height: '100%'}}>
                    <ListItem className='product'products={products}/>
                </div>

                <div className='nextPage'>
                    <button>Ver mais produtos! -></button>
                </div>
            </div>
        </>
    )
}
export default Product;
