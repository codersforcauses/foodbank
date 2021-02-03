import React from 'react';

import "./index.css";

import Grains from "./Categories/grains";
import Vegetables from "./Categories/vegetables";
import Fruit from "./Categories/fruit";
import Dairy from "./Categories/dairy";
import Meat from "./Categories/meat";


import vegetables from "./Images/vegetables.png";
import fruit from "./Images/fruit.png";
import dairy from "./Images/dairy.png"
import meat from "./Images/meat.png";

export interface FoodCategoriesProps {
    isGrainsLocked: boolean;
    isVegetablesLocked: boolean;
    isFruitLocked: boolean;
    isDairyLocked: boolean;
    isMeatLocked: boolean;
}


export const FoodCategories = (props: FoodCategoriesProps) => {
    const rotate = 180;
    return (
        <React.Fragment>
            <div className="food-categories-container">
                {/* <svg height="400" width="400" viewBox="0 0 500 500"> 

                    <Grains/>
                    <Vegetables/>
                </svg> */}
                    {/* <Fruits/> */}
                    {/* <Dairy/> */}
                    {/* <Meat/> */}

                    <Grains isLocked={props.isGrainsLocked}/>
                    <Vegetables isLocked={props.isVegetablesLocked}/>
                    <Fruit isLocked={props.isFruitLocked}/>
                    <Dairy isLocked={props.isDairyLocked}/>
                    <Meat isLocked={props.isMeatLocked}/>





            </div>
        </React.Fragment>
    )
}