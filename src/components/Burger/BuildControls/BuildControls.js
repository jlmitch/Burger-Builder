import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: $<span className={classes.Price}>{props.price.toFixed(2)}</span></p>
        {controls.map(({ type, label }) => (
            <BuildControl
                key={label} 
                label={label}
                added={() => props.ingredientAdded(type)} 
                removed={() => props.ingredientRemoved(type)}
                disabled={props.disabled[type]} />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchaseable} 
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;