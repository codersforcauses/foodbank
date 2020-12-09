
import React, { useEffect, useRef, useState } from 'react'
import { Map } from 'Components/Map'
import { Dialogue } from 'Components/Dialogue';
import { Location } from 'lib/types'
import bananamanAvatar from 'lib/assets/banana.jpg';

const messages = ["Hi I am banana man nice to meet you",
    "This is tucker island, I hope you have a jolly good time learning here",
    "pew pew, Bnaana man out"];

const Home: React.FC = () => {

    const [height, setHeight] = useState(0);
    const elementRef = useRef(null as null | HTMLDivElement);

    useEffect(() => {
        console.log(elementRef?.current?.clientHeight);
        if (elementRef?.current?.clientHeight) {
            setHeight(elementRef?.current?.clientHeight);
            console.log(height);
        }
    }, []); //empty dependency array so it only runs once at render


    const [selected, onSelect] = useState<Location | null>(null);
    return(
    <>
        <div ref={elementRef} className="bg-gray-500 flex flex-col h-screen">
            <Map selected={selected} onSelect={onSelect} height={height} />
        </div>
        <Dialogue messages={messages} speaker={"bananaman"} avatar={bananamanAvatar} />
    </>
    )
}

export default Home
