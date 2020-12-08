import React, { useState } from 'react'
import { Map } from '../../Components/Map'
import {Location} from '../../lib/types'

const Home: React.FC = () => {
    const [selected, onSelect] = useState<Location | null>(null);
    return <div ><Map selected={selected} onSelect={onSelect} /></div>
}

export default Home
