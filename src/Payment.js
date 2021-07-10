import React, { useState,useEffect } from "react";
import "./Payment.css";
import { UseStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link,useHistory } from "react-router-dom";
import { CardElement, useStripe ,useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from './reducer.js';
import axios from './axios';

function Payment() {
  const [{ user, basket }, dispatch] = UseStateValue();
  const stripe =useStripe();
  const elements = useElements();
  const history = useHistory();

  const[processing,setProcessing] = useState("");
  const[succeeded,setSucceeded] = useState(false);
 
  const [error,setError] = useState(null);
  const [disabled ,setDisabled] =useState(true);

  const [clientSecret,setClientSecret] = useState(true);
  
  // whwnever basket changes we need a new clientsecret cause the charge value is been changed
  useEffect(()=>{
     //generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () =>{
      const response = await axios({     
        method:'post',
        // stripe expects the total in a currencies subunits
        url:`/payment/create?total = ${getBasketTotal(basket) * 100}`
      })
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
    },[basket])

  const handleSubmit = async (event) => {
    //do all the fancy stripe
    event.preventDefault();
    setProcessing(true);
    
    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) =>{
      //paymentIntent = payment Confirmation
      //if its true then -->
      setSucceeded(true);
      setError(null);
      setProcessing(false);

      history.replace('/orders')
      //instead of history.push we used replace beacuse after payment is done 
      //we dont want to  redirect instead we will replace
      //we don't want user to come back to this page that's why  we used replace 
    })
  } 

  const handleChange = e => {
    // Listen for changes in the CardElemnt
    //and display any errors as the customer types their card details
    setDisabled(e.empty);    //if the event e is empty then set to disable 
    setError(e.error ? e.error.message : "");    //if error then show
  }
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="./checkout">{basket?.length} Items</Link> )
        </h1>
        {/* Payment section -- delivery address*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>155 Shanti Nagar</p>
            <p>Etah , UttarPradesh</p>
          </div>
        </div>
        {/* Payment section -- Review Items*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment section -- Payment Method*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <h4>Card Details</h4>
            {/*Stripe magic will go here*/}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>


              <div className="payment__priceContainer">
                 
                <CurrencyFormat renderText={(value) => (
                  <> 
                   <h3>Order Total : {value}</h3>
                  </>
                  )}   
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                />
                <button className="payment__button"
                disabled={processing || disabled ||succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/*errors*/}
              {error && <div>{error}</div>} {/* if there is an error only then show the error div*/}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
