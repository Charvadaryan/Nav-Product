import React from 'react'

const Cart = (props) => {
    return (
        <div>
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <h5 className="card-title">{props.item.price}</h5>
                <a onClick={props.btnFunction} href="#" className="btn btn-primary">{props.button}</a>
            </div>
        </div>
        </div>
    )
}
export default Cart;