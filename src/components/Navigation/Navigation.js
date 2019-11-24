import React from 'react';

const Navigation = (props) => {
    return (
        <div>
            {/* <button>Product</button>
            <button>Cart</button> */}
            <ul className="d-flex" style={{listStyle: 'none'}}>
                <li className="nav-item">
                    <a onClick={props.changeTab.bind(null, "Product")} className="nav-link" href="#">Product</a>
                </li>
                <li className="nav-item">
                    <a onClick={props.changeTab.bind(null, "Card")} className="nav-link" href="#">Cart</a>
                </li>
            </ul>
        <button className="btn btn-primary">Selected: {props.count.length}</button>
        </div>
    )
    
}

export default Navigation;