import React from 'react';

import "./index.css";

// import Grains from "./Categories/grains";
// import Vegetables from "./Categories/vegetables";
// import Fruits from "./Categories/fruits";
// import Dairy from "./Categories/dairy";
// import Meat from "./Categories/meat";

import grains from "./Images/grains.png"
import vegetables from "./Images/vegetables.png";
import fruit from "./Images/fruit.png";
import dairy from "./Images/dairy.png"
import meat from "./Images/meat.png";

export interface FoodCategoriesProps {
    word: string;
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

            {/* <svg width="325" height="325" viewBox=" 0 0  400 400" xmlns="http://www.w3.org/2000/svg">
                <path d="M 80 80
                    A 45 45, 0, 0, 0, 125 125
                    L 125 80 Z" fill="green"/> */}
                    
        {/* <path className="path" d="M275,175 v-150 a150,150 0 0,0 -150,150 z"
        fill="yellow" stroke="blue" strokeWidth="5" 
        transform="rotate(378, 250, 250)" /> */}
           {/* </svg> */}


        <img className="grains" src={grains}/>
        <img className="vegetables" src={vegetables}/>
        <img className="fruit" src={fruit}/>
        <img className="dairy" src={dairy}/>
        <img className="meat" src={meat}/>





            </div>
        </React.Fragment>
    )
}