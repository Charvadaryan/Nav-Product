import React from 'react';
import Cart from '../cart/cart';

const Card = (props) => {
    return(
      <div>
            {props.selected.map(item => {
                return <Cart button="Remove" key={item.id} btnFunction={props.removeCard.bind(null, item.id)} item={item}/>
            })}
        </div>
      // <div className="card" >
      //   <div className="card-body">
      //     <h5 className="card-title">{props.data.name}</h5>
      //     <h5 className="card-title">{props.data.price}</h5>   
      //     <a href="#" onClick={() => {props.addItem(props.data)}} className="btn btn-primary">Add to cart</a>
      //   </div>
      // </div>
    )
}
export default Card;