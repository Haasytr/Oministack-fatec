import React from 'react';

import './styles.css';

const ListItem = (props) => {
    const { products, countSlice } = props
    return products.slice(countSlice).map(product => (      
        <div className='ListItem overlay' key={product.id}>      
            <img src={product.image} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span className='span'>R${product.price}</span>
            <button className='button'><a href={`http://localhost:3000/product/${product._id}`}>Ver Produto</a></button>
        </div>   
        ))
};


export default ListItem;