import React from 'react';

import "../index.css";
import meat from "../Images/meat.png";

interface MeatProps {
    isLocked: boolean,
}

const Meat = (props: MeatProps) => {
    return (
        <div>
            <img className={"meat" + (props.isLocked ? " locked" : "")} src={meat}/>
        </div>
    )

}

export default Meat;

{/* <React.Fragment>
        <circle className="meat" r="100" cx="250" cy="250" fill="transparent"
        stroke="#69A3D8" strokeWidth="200" strokeDasharray="calc(16 * 628/100) 628"
        transform="rotate(464.4, 250, 250) translate(5, 5)"
    />
    <text transform="translate(-87.37132713286675,-10.500056906587716)" dy=".35em">Tolerant</text>
    </React.Fragment> */}