import React from 'react';
import Aux from '../../../hoc/Auxiliary/auxiliary';
import '../BuildControls/BuildControls.css'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
    return (
        <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
        </li>)
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <button 
                onClick={props.purchaseContinued} 
                style={{color: '#5C9210'}}
                className="Button">CONTINUE</button>
        </Aux>
    )
};

export default orderSummary;