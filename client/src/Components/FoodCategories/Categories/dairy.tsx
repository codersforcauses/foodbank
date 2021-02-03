import React from 'react';

import "../index.css";
import dairy from "../Images/dairy.png"

interface DairyProps {
    isLocked: boolean,
}

const Dairy = (props: DairyProps) => {
    return (
        <div>
            <img className={"dairy" + (props.isLocked ? " locked" : "")} src={dairy}/>
        </div>
    )

}

export default Dairy;