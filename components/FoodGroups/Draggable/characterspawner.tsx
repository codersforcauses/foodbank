import React, {useEffect} from 'react'
import Draggable from '@components/FoodGroups/Draggable'

import {
    foodGroupsCharacterImages
} from './characterimages'

import { FoodGroupCharacterImage } from './types'

interface Props {
  onEndDrag: Function
  onStartDrag: Function
  resetlogic: Boolean
}

const CharacterSpawner:React.FC<Props> = (props:Props) => {

    let currentSet:FoodGroupCharacterImage[] = generateCharacterSet()
    // console.log(props.onStartDrag)
    // const onEndDrag = props.onEndDrag()
    // const onStartDrag = props.onStartDrag()

  

    function generateCharacterSet() {
        const characterSet: FoodGroupCharacterImage[] = []
        // Is there a dynamic way to do this? (answer is yes but what is the most efficient way to do it?)
        const meatCharacters = foodGroupsCharacterImages.filter(character => character.type === 'meat')
        const dairyCharacters = foodGroupsCharacterImages.filter(character => character.type === 'dairy')
        const vegetableCharacters = foodGroupsCharacterImages.filter(character => character.type === 'vegetables')
        const fruitCharacters = foodGroupsCharacterImages.filter(character => character.type === 'fruit')
        const grainCharacters = foodGroupsCharacterImages.filter(character => character.type === 'grains')

        characterSet.push(meatCharacters[Math.floor(Math.random()*meatCharacters.length)])
        characterSet.push(dairyCharacters[Math.floor(Math.random()*dairyCharacters.length)])
        characterSet.push(vegetableCharacters[Math.floor(Math.random()*vegetableCharacters.length)])
        characterSet.push(fruitCharacters[Math.floor(Math.random()*fruitCharacters.length)])
        characterSet.push(grainCharacters[Math.floor(Math.random()*grainCharacters.length)])

        return characterSet
    }
    
    useEffect(() => {
        currentSet = generateCharacterSet()
        
    }, [])
    
    
    return (
        <>

        {currentSet.map((character, index) => {
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