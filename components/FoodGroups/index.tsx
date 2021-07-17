import React, {useEffect, useState} from 'react'
import Image from "next/image";

import styles from 'components/FoodGroups/foodgroups.module.css'
import {Modal} from '@components/Custom'
import WindowResizeHook from '@components/FoodGroups/WindowResizeHook'

import {
    resize_map,
    initialCoordinates,
    initialWidths,
    handleMouseOver,
    handleMouseOut,
    foodGroupsImages
} from '@components/FoodGroups/dinamicStyles'

/**
 * A page displaying all food groups in a pie chart
 */

const FoodGroups: React.FC = () => {
    
    const toggleModal = (group) => {
        if (!modalState) {
            setProps({
                ...props,
                group: group.div_id,
                heading: group.div_id.charAt(0).toUpperCase() + group.div_id.slice(1)

            })
        }
        setModalState(!modalState)
    }

    const [modalState, setModalState] = useState(false);
    const [props, setProps] = useState({
        open: true,
        heading: "General",
        group: ""
    })

    const [foodGroupStyles, setFoodGroupStyles] = useState([" ", "z-0", "transition", "duration-500", "ease-in-out"])
    const [meatStyles, setMeatStyles] = useState([""])
    const [grainsStyles, setGrainsStyles] = useState([""])
    const [dairyStyles, setDairyStyles] = useState([""])
    const [fruitStyles, setFruitStyles] = useState([""])
    const [vegetablesStyles, setVegetablesStyles] = useState([""])

    const [coordinates, setCoordinates] = useState(initialCoordinates)
    const [previousWidth, setPreviousWidth] = useState(initialWidths)

    const allstates = {
        meatStyles,
        setMeatStyles,
        grainsStyles,
        setGrainsStyles,
        dairyStyles,
        setDairyStyles,
        fruitStyles,
        setFruitStyles,
        vegetablesStyles,
        setVegetablesStyles
    }
    const hoverStyles = [dairyStyles, meatStyles, fruitStyles, vegetablesStyles, grainsStyles]
    
    useEffect(() => {
        resize_map(previousWidth, coordinates, setPreviousWidth, setCoordinates)
    }, []);

    return (
        <div className="flex justify-center">
            {modalState &&
						<Modal {...props} onClose={toggleModal} size='lg'>
                          <h1>{props.group}</h1>
						</Modal>
            }
            {/* Handles resizing maps on screen resize for SSR */}
            <WindowResizeHook params={{previousWidth, coordinates, setPreviousWidth, setCoordinates}}/>

            <div className={"flex flex-col"}>
                {
                    foodGroupsImages.map((group, index) => {
                        return (
                            <div id={group.div_id} key={group.div_id}
                                 className={styles[`${group.img_styles}`] + " " + foodGroupStyles.join(' ') + " " + hoverStyles[index].join(' ')}>
                                <map id={`map-${index}`} name={group.map_name}>
                                    <area onMouseOver={() => handleMouseOver(group.div_id, {allstates})}
                                          onMouseOut={() => handleMouseOut(group.div_id, {allstates})}
                                          onClick={() => toggleModal(group)}
                                          alt={group.div_id} shape='poly'
                                          coords={coordinates[index].join(', ')}
                                    />
                                </map>
                                <Image src={group.img_src}
                                       alt={group.div_id}
                                       layout="fill"
                                       className={styles['custom-img']}
                                       useMap={`#${group.map_name}`}
                                       id={group.img_id}
                                />
                            </div>)
                    })
                }
            </div>
        </div>
    )
}
export default FoodGroups
