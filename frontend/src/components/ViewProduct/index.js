import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'




const ViewProduct = (props) => {

    const [product, setProducts] = useState({
        name: '',
        price: '',
        description: '',
        image: ''
    })

    function getProducts() {
        const { id } = props.match.params
      
        axios.get(`http://localhost:3001/api/product/${id}`)
            .then(response => {
            const product = response.data.product
            setProducts(product)
          })
      }

    useEffect(() => {
        getProducts()
    }, [])
    
    return (<>
        <div className='container' style={{ alignItems: 'unset' }}>
         
            <div className='product'>
                <div className='content'>           
                    <img src={product.image} />
                   
                    <div className='product-info' >
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <span>R${product.price}</span> 
                        <button className='buynow'>Comprar agora!</button>
                    </div>
                </div>
        </div>
            
        </div>
        
    </>)
}

export default ViewProduct
