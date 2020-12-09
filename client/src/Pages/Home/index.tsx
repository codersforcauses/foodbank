
import React, { useState } from 'react'
import { Map } from 'Components/Map'
import { Dialogue } from 'Components/Dialogue';
import {Location} from 'lib/types'
import bananamanAvatar from 'lib/assets/banana.jpg';

const messages = [ "Hi I am banana man nice to meet you",
"This is tucker island, I hope you have a jolly good time learning here",
"pew pew, Bnaana man out"];

const Home: React.FC = () => {
    const [selected, onSelect] = useState<Location | null>(null);
    return <div ><Map selected={selected} onSelect={onSelect} />
    <Dialogue messages={messages} speaker={"bananaman"} avatar= {bananamanAvatar}/>
    </div>

}

export default Home
