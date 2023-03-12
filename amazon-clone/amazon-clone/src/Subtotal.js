import React from 'react'
import "./Subtotal.css"
import CurrencyFomat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';

function Subtotal() {

    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

    return (
        

        <div className="subtotal">
        <CurrencyFomat
        renderText = {(value) => (
            <>
            <p>
                Subtotal (<strong>{basket?.length}</strong> {basket?.length ===1 ? "item" : "items"}): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift" >
                <input className="subtotal_giftInput" type="checkbox" /> This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />

        <button 
        onClick = { e => history.push("/payment")} 
        className="subtotal_button">
        Proceed to Checkout
        </button>
        </div>
    )
}

export default Subtotal
