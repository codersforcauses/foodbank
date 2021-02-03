import React from 'react';

import "../index.css";
import fruit from "../Images/fruit.png";

interface FruitProps {
    isLocked: boolean,
}

const Fruit = (props: FruitProps) => {

    return (                
        <div>
            <img className={"fruit" + (props.isLocked ? " locked" : "")} src={fruit} alt="fruit"/>
        </div>
)

}

export default Fruit;