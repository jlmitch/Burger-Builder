import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = ({ clicked, show }) => (
    show 
        ? <div 
            className={classes.Backdrop}
            onClick={clicked}></div> 
        : null
);

export default backdrop;