import React from 'react';

import "../index.css";
import grains from "../Images/grains.png"

interface GrainsProps {
    isLocked: boolean,
}

const Grains = (props: GrainsProps) => {
    return (
        <div>
            <img className={"grains" + (props.isLocked ? " locked" : "")} src={grains}/>
        </div>
    )

}

export default Grains;
