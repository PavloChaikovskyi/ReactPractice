import React from 'react';
import classes from './MyButton.module.css'

const MyButton = (props) => {
    return (
        <button class={classes.myBtn}>
           {props.children}
        </button>
    );
};

export default MyButton;