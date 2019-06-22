import React from 'react';

import './styles.css';

const ListItem = (props) => {
    const { products } = props
    return products.map(product => ( 
        <div className='ListItem' key={product.id}>
            <img src={product.image} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>R${product.price}</span>
        </div>   
        ))
};


export default ListItem;