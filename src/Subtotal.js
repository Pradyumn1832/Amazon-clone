import React from "react";
import "./Subtotal.css";
import { UseStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
function Subtotal() {
  const history = useHistory(); //we use history.push to redirect to a page programmatically rather than using LINK
  const [{ basket }] = UseStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a subtotal__gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={() => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}
export default Subtotal;
