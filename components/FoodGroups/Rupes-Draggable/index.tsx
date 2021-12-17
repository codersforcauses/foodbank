import React, { MouseEventHandler, useEffect, useState } from 'react'
import { CharacterDraggable } from './characterdraggable'
import Draggable from 'react-draggable';

const DraggableCharacters: React.FC<{character:CharacterDraggable}> = (props) => {

    return (
        <div style="background-color:red">
            <Draggable
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                scale={1}>
                Test
            </Draggable>
        </div>
    )
}

export default DraggableCharacters