import React, {useEffect} from 'react'
import Draggable from '@components/FoodGroups/Draggable'

import {
    foodGroupsCharacterImages
} from './characterimages'

interface Props {
  onEndDrag: Function
  onStartDrag: Function
}

const CharacterSpawner:React.FC<Props> = (props:Props) => {

    const currentgen = generateCharacterSet()
    // console.log(props.onStartDrag)
    // const onEndDrag = props.onEndDrag()
    // const onStartDrag = props.onStartDrag()

    function chooseFive() {
        // console.log(5*Math.random())
    }
    
    function generateCharacterSet(){
      // in prog
    }
    
    useEffect(() => {
        // console.log(foodGroupsCharacterImages)
    })
    
    
    return (
        <>

        {foodGroupsCharacterImages.map((character, index) => {
            return (
              <Draggable 
                key={index}
                onEndDrag={props.onEndDrag}
                onStartDrag={props.onStartDrag}
                {...character}
              />
            )
          })}
        </>
    )
}

export default CharacterSpawner