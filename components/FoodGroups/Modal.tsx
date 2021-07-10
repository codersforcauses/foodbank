import React from 'react';
import classes from './foodgroups.module.css';

const FoodGroupModal = ({ toggleModal, data }) => {
    return (
        <div className={classes["food-group-modal"]}>

            <h1>Food group</h1>
            <h2>{data.name}</h2>
            <button onClick={toggleModal}>Close</button>
        </div>
    );
};


export default FoodGroupModal;
