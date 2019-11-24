import React, { useState , useEffect } from 'react';
import Cart from '../cart/cart';

const Products = (props) => {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/item')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])


    return (
        <div>
            {data.map((item) => {
                return (
                    
                    <Cart button="Add to Cart" btnFunction={props.addCard.bind(null, item)} key={item.id} item={item}/>
                    
                )
            })}
        </div>
    )
}

export default Products;