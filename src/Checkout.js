import React from "react";
import "./Checkout.css";
import { UseStateValue } from "./StateProvider";
import Subtotal from "./Subtotal.js";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = UseStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="http://trashomfg.com/wp-content/uploads/2021/02/amazon.gif"
          alt=""
        />
        <div>
          <h3>{user ? `Hey , ${user.email}` : null}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          <FlipMove>
            {basket.map((item) => (
              <div key={item.index} className="checkout__product">
                <CheckoutProduct
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
              </div>
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
