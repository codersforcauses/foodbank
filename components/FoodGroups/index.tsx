import React, { useEffect, useState } from 'react'
import dairy from 'public/images/FoodGroups/dairy-shadow.png'
import meat from 'public/images/FoodGroups/meat-shadow.png'
import fruit from 'public/images/FoodGroups/fruit-shadow.png'
import grains from 'public/images/FoodGroups/grains-shadow.png'
import vegetables from 'public/images/FoodGroups/vegetables-shadow.png'

import styles from 'components/FoodGroups/foodgroups.module.css'

import Image, {ImageProps} from "next/image";
import {Modal} from '@components/Custom'
import WindowResizeHook from '@components/FoodGroups/WindowResizeHook'

import {
    resize_map,
    initialCoordinates,
    initialWidths,
    handleMouseOver,
    handleMouseOut
} from '@components/FoodGroups/dinamicStyles'

/**
 * A page displaying all food groups in a pie chart
 */

interface FoodGroupProps {
    open: boolean
    onClose: () => void
}

const FoodGroups: React.FC = () => {

    const toggleModal = () => {
        console.log("toggle modal!")
        setModalState(!modalState)
    }

    const [modalState, setModalState] = useState(false);
    const [props, setProps] = useState({
        open: true,
        heading: "General"
    })

    const [foodGroupStyles, setFoodGroupStyles] = useState([" ", "z-0", "transition", "duration-500", "ease-in-out"])
    const [meatStyles, setMeatStyles] = useState([""])
    const [grainsStyles, setGrainsStyles] = useState([""])
    const [dairyStyles, setDairyStyles] = useState([""])
    const [fruitStyles, setFruitStyles] = useState([""])
    const [vegetablesStyles, setVegetablesStyles] = useState([""])

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

    const [coordinates, setCoordinates] = useState(initialCoordinates)
    const [previousWidth, setPreviousWidth] = useState(initialWidths)


    useEffect(() => {
        resize_map(previousWidth, coordinates, setPreviousWidth, setCoordinates)
    }, []);

    return (
        <div className="flex justify-center">
            {modalState &&
						<Modal {...props} onClose={toggleModal} size='lg'>
							<h1>Modal</h1>
						</Modal>
            }
            {/* Handles resizing maps on screen resize for SSR */}
            <WindowResizeHook params={ { previousWidth, coordinates, setPreviousWidth, setCoordinates } }/>
            <div className={"flex flex-col"}>
                <div id="dairy"
                     className={styles['img-dairy'] + " " + foodGroupStyles.join(' ') + " " + dairyStyles.join(" ")}>
                    <map id="map_id" name="dairy_map">
                        <area onMouseOver={(e) => handleMouseOver(e, {allstates})}
                              onMouseOut={(e) => handleMouseOut(e, {allstates})}
                              onClick={toggleModal}
                              alt="Dairy" shape='poly'
                              coords={coordinates[0].join(', ')}/>
                    </map>
                    <Image src={dairy.src}
                           alt='dairy'
                           layout="fill"
                           className={styles['custom-img']}
                           useMap="#dairy_map"
                           id="dairy-img"
                    />
                </div>


                <div id="meat"
                     className={styles['img-meat'] + " " + foodGroupStyles.join(' ') + " " + meatStyles.join(' ')}>
                    <map id="map_id" name="meat_map">
                        <area onMouseOver={(e) => handleMouseOver(e, {allstates})}
                              onMouseOut={(e) => handleMouseOut(e, {allstates})}
                              onClick={toggleModal}
                              alt="Meat" shape='poly'
                              coords={coordinates[1].join(', ')}/>
                    </map>
                    <Image src={meat.src}
                           alt='meat'
                        // 
                           layout="fill"
                           className={styles['custom-img']}
                           useMap="#meat_map"
                           id="meat-img"

                    />
                </div>

                <div id="fruit"
                     className={styles['img-fruit'] + " " + foodGroupStyles.join(' ') + " " + fruitStyles.join(' ')}>
                    <map id="map_id" name="fruit_map">
                        <area onMouseOver={(e) => handleMouseOver(e, {allstates})}
                              onMouseOut={(e) => handleMouseOut(e, {allstates})}
                              onClick={toggleModal}
                              alt="Fruit" shape='poly'
                              coords={coordinates[2].join(', ')}/>
                    </map>

                    <Image src={fruit.src}
                           alt='fruit'
                           layout="fill"
                           className={styles['custom-img']}
                           useMap="#fruit_map"
                           id="fruit-img"
                    />
                </div>

                <div id="vegetables"
                     className={styles['img-vegetables'] + " " + foodGroupStyles.join(' ') + " " + vegetablesStyles.join(" ")}>

                    <map id="map_id" name="vegetables_map">
                        <area onMouseOver={(e) => handleMouseOver(e, {allstates})}
                              onMouseOut={(e) => handleMouseOut(e, {allstates})}
                              onClick={toggleModal}
                              alt="Vegetables" shape='poly'
                              coords={coordinates[3].join(', ')}/>
                    </map>
                    <Image src={vegetables.src}
                           alt='vegetables'
                        // onClick={toggleModal}
                           layout="fill"
                           className={styles['custom-img']}
                           useMap="#vegetables_map"
                           id="vegetables-img"
                    />
                </div>

                <div id="grains"
                     className={styles['img-grains'] + " " + foodGroupStyles.join(' ') + " " + grainsStyles.join(" ")}>

                    <map id="map_id" name="grains_map">
                        <area onMouseOver={(e) => handleMouseOver(e, {allstates})}
                              onMouseOut={(e) => handleMouseOut(e, {allstates})}
                              alt="Grains" shape='poly'
                              coords={coordinates[4].join(', ')}/>
                    </map>

                    <Image src={grains.src}
                           alt='grains'
                           layout="fill"
                           className={styles['custom-img']}
                           useMap="#grains_map"
                           id="grains-img"
                    />
                </div>
            </div>
        </div>
    )
}
export default FoodGroups
