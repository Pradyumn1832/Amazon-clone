import React from 'react'
import './CheckoutProduct.css';
import { UseStateValue } from './StateProvider';
function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket}, dispatch] = UseStateValue();
    const removefrombasket = ()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
    }
    return (
        <div className="checkoutproduct">
            <img 
              className="checkoutproduct__image"
              src={image}
              alt=""
            />
            <div className="checkoutproduct__info">
                <div className="checkoutproduct__title">
                <strong>{title}</strong>
                </div>  
                <div className="checkoutproduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="checkoutproduct__rating">
                   {Array(rating)
                   .fill()
                   .map((_,i) => (
                     "⭐"
                   ))}
                </div>
                <button className="checkoutproduct__button" onClick={removefrombasket}>
                    Remove from Basket
                </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
