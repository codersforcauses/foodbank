import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import styles from 'components/FoodGroups/foodgroups.module.css'
import { Modal } from '@components/Custom'
import WindowResizeHook from '@components/FoodGroups/WindowResizeHook'

import {
  resize_map,
  initialCoordinates,
  initialWidths,
  handleMouseOver,
  handleMouseOut,
  foodGroupsImages
} from '@components/FoodGroups/dinamicStyles'

import { FoodGroupStates, StateDispatch } from '@components/FoodGroups/types'

/**
 * A page displaying all food groups in a pie chart
 */

const FoodGroups: React.FC = () => {
  const toggleModal = () => {
    console.log('toggle modal!')
    setModalState(!modalState)
  }

  const [modalState, setModalState] = useState(false)
  const [props, setProps] = useState({
    open: true,
    heading: 'General'
  })

  const [foodGroupStyles, setFoodGroupStyles] = useState([
    ' ',
    'z-0',
    'transition',
    'duration-500',
    'ease-in-out'
  ])
  // const [meatStyles, setMeatStyles] = useState([''])
  // const [grainsStyles, setGrainsStyles] = useState([''])
  // const [dairyStyles, setDairyStyles] = useState([''])
  // const [fruitStyles, setFruitStyles] = useState([''])
  // const [vegetablesStyles, setVegetablesStyles] = useState([''])

  const [coordinates, setCoordinates] = useState(initialCoordinates)
  const [previousWidth, setPreviousWidth] = useState(initialWidths)

  // interface allStates {
  //     [index: string]: {
  //         style: string[],
  //         setStyle: Dispatch<React.SetStateAction<string[]>>
  //     }
  // };

  const meat = useState([''])
  const grains = useState([''])
  const dairy = useState([''])
  const fruit = useState([''])
  const vegetables = useState([''])

  const makeStyle = (style: [string[], StateDispatch<string[]>]) => ({
    styles: style[0],
    setStyles: style[1]
  })

  const allStates: FoodGroupStates = {
    meat: makeStyle(meat),
    grains: makeStyle(grains),
    dairy: makeStyle(dairy),
    fruit: makeStyle(fruit),
    vegetables: makeStyle(vegetables)
  }

  // const hoverStyles = Object.values(allStates).map(e => e.styles)
  const hoverStyles = [
    // meat
    allStates.dairy.styles,
    allStates.meat.styles,
    allStates.fruit.styles,
    allStates.vegetables.styles,
    allStates.grains.styles
  ] // vegetables

  // const allStates = {
  //     meatStyles,
  //     setMeatStyles,
  //     grainsStyles,
  //     setGrainsStyles,
  //     dairyStyles,
  //     setDairyStyles,
  //     fruitStyles,
  //     setFruitStyles,
  //     vegetablesStyles,
  //     setVegetablesStyles
  // }

  useEffect(() => {
    resize_map({ previousWidth, coordinates, setPreviousWidth, setCoordinates })
  }, [previousWidth, coordinates])

  return (
    <div className='flex justify-center'>
      {modalState && (
        <Modal {...props} onClose={toggleModal} size='lg'>
          <h1>Modal</h1>
        </Modal>
      )}
      {/* Handles resizing maps on screen resize for SSR */}
      <WindowResizeHook
        params={{
          previousWidth,
          coordinates,
          setPreviousWidth,
          setCoordinates
        }}
      />

      <div className={'flex flex-col'}>
        {foodGroupsImages.map((group, index) => {
          return (
            <div
              id={group.div_id}
              key={group.div_id}
              className={
                styles[`${group.img_styles}`] +
                ' ' +
                foodGroupStyles.join(' ') +
                ' ' +
                hoverStyles[index].join(' ')
              }
            >
              <map id={`map-${index}`} name={group.map_name}>
                <area
                  onMouseOver={() => handleMouseOver(group.div_id, allStates)}
                  onKeyDown={() => {}} // TODO: ACCESSIBILITY
                  onFocus={() => {}} // TODO: ACCESSIBILITY
                  onMouseOut={() => handleMouseOut(group.div_id, allStates)}
                  onBlur={() => {}} // TODO: ACCESSIBILITY
                  onClick={toggleModal}
                  role='menu' // FIXME: Not sure if this is the right role
                  tabIndex={0}
                  alt={group.div_id}
                  shape='poly'
                  coords={coordinates[index].join(', ')}
                />
              </map>
              <Image
                src={group.img_src}
                alt={group.div_id}
                layout='fill'
                className={styles['custom-img']}
                useMap={`#${group.map_name}`}
                id={group.img_id}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default FoodGroups
