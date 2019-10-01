import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './OrderSummary.module.css';
import Button from '../../UI/Button/Button';

const orderSummary = ({ ingredients, purchaseCancelled, purchaseContinued, price }) => {
    const ingredientSummary = Object.keys(ingredients).map((igKey) => {
        return (
            <li key={igKey}> 
                <span className={classes.IngredientName}>{igKey}</span>: {ingredients[igKey]}
            </li>
        )
    });


    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: $<span className={classes.OrderSummaryPrice}>{price.toFixed(2)}</span></p>
            <p>Continue to checkout?</p>
            <Button 
                btnType="Danger"
                clicked={purchaseCancelled}>CANCEL</Button>
            <Button
                btnType="Success"
                clicked={purchaseContinued}>CONTINUE</Button>
        </Auxiliary>
    )
};

export default orderSummary;