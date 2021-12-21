import React, {
  HTMLAttributes,
  StyleHTMLAttributes,
  useEffect,
  useState
} from 'react'
import Image from 'next/image'

import styles from 'components/FoodGroups/foodgroups.module.css'
import { Modal } from '@components/Custom'
import WindowResizeHook from '@components/FoodGroups/WindowResizeHook'

import {
  foodGroupsCharacterImages
} from './Draggable/characterimages'

import {
  resize_map,
  handleMouseOver,
  handleMouseOut,
  foodGroupsImages,
  angleRegions
} from '@components/FoodGroups/dinamicStyles'

import { FoodGroupStates, StateDispatch } from '@components/FoodGroups/types'
import { Vector2 } from './Draggable/boundingbox'

/**
 * A page displaying all food groups in a pie chart
 */

const FoodGroups = ({ setHoverType }: { setHoverType: Function }) => {
  const toggleModal = () => {
    // console.log('toggle modal!')
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

  const [radius, setRadius] = useState(0)
  const [center, setCenter] = useState({ x: 0, y: 0 })
  const [currentRegion, setCurrentRegion] = useState('') // Debounce mouse events

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

  // const firstImage = foodGroupsCharacterImages[0]
  // console.log('firstImage', firstImage)

  useEffect(() => {
    resize_map({ setCenter, setRadius })
  }, [setCenter, setRadius])

  const getRegion = (theta: number) => {
    for (let i = 0; i < angleRegions.length; i++) {
      const region = angleRegions[i]
      if (theta > region.start && theta < region.end) {
        return region.region_name
      }
    }
    return ''
  }

  const wheelMouseOver = ({ x, y }: Vector2) => {
    const dx = x - center.x
    const dy = y - center.y
    if (dx * dx + dy * dy < radius * radius) {
      const newRegion = getRegion(Math.atan2(dy, dx))
      if (newRegion !== currentRegion) {
        handleMouseOut(currentRegion, allStates)
        if (newRegion !== '') {
          handleMouseOver(newRegion, allStates)
        }
        setCurrentRegion(newRegion)
      }
    } else if (currentRegion !== '') {
      handleMouseOut(currentRegion, allStates)
      setCurrentRegion('')
    }
  }

  useEffect(() => {
    const handler = (e: MouseEvent) =>
      wheelMouseOver({ x: e.clientX, y: e.clientY })
    document.addEventListener('mousemove', handler)
    return () => {
      document.removeEventListener('mousemove', handler)
    }
  }, [radius, center, currentRegion])

  useEffect(() => {
    const handler = (e: TouchEvent) =>
      wheelMouseOver({ x: e.touches[0].clientX, y: e.touches[0].clientY })
    document.addEventListener('touchmove', handler)
    return () => {
      document.removeEventListener('touchmove', handler)
    }
  }, [radius, center, currentRegion])

  useEffect(() => {
    setHoverType(currentRegion)
  }, [currentRegion])

  return (
    <>
      {modalState && (
        <Modal {...props} onClose={toggleModal} size='lg'>
          <h1>Modal</h1>
        </Modal>
      )}
      {/* Handles resizing maps on screen resize for SSR */}
<<<<<<< HEAD
      <WindowResizeHook params={{ setRadius, setCenter }} />
      {/* <div
=======
      <WindowResizeHook
        params={{
          previousWidth,
          coordinates,
          setPreviousWidth,
          setCoordinates
        }}
      />
      <div
        // className='flex flex-col'
        className='scale-wheel'
        // style={{ flexShrink: 0, position: 'relative' }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          maxWidth: '95vh',
          width: '80%',
          // backgroundColor:'yellow',
          ...style
        }}
        draggable={false}
      >
        {/* <div
>>>>>>> origin/experimental-drag-drop-rupert
        className={'flex flex-col'}
        style={{
          height: previousFlexHeight + 'px',
          margin: 0.05 * previousFlexHeight + 'px' // 5% margin, variable (Animation makes slices go above the height)
        }}
      > */}
<<<<<<< HEAD
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
              hoverStyles[index].join(' ') +
              ' scale-wheel'
            }
            draggable={false}
          >
            <Image
              src={group.img_src}
              alt={group.div_id}
              layout='fill'
              className={styles['custom-img']}
              useMap={`#${group.map_name}`}
              id={group.img_id}
              draggable={false}
            />
          </div>
        )
      })}
      {/* </div> */}
=======
        {/* important stuff}
        {/* {console.log('hello', foodGroupsCharacterImages.map((element) => foodGroupsCharacterImages))} */}

        {/* <Draggable div_id={firstImage.div_id} img_src={firstImage.img_src} img_id={firstImage.img_id} starting_x={firstImage.starting_x} starting_y={firstImage.starting_y}/> */}

        {foodGroupsCharacterImages.map((character,index) => {
          return (
            <Draggable div_id={character.div_id} img_src={character.img_src} img_id={character.img_id} starting_x={character.starting_x} starting_y={character.starting_y} bounding_box_id={index}/>
          )
        })}

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
              
              draggable={false}
            >
              <map
                id={`map-${index}`}
                name={group.map_name}
                className={styles['test-area']}
                draggable={false}
              >
                <area // Is there a way to change the Z-index of just this area so it triggers the mouseover? But that would just prevent the draggable from being interacted with?
                  onDragEnter={() => handleMouseOver(group.div_id, allStates)}
                  onMouseOver={() => handleMouseOver(group.div_id, allStates)}
                  onKeyDown={() => {}} // TODO: ACCESSIBILITY
                  onFocus={() => {}} // TODO: ACCESSIBILITY
                  onDragLeave={() => handleMouseOut(group.div_id, allStates)}
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
                draggable={false}
              />
            </div>
          )
        })}
      </div>
      {/* <div style={{width: '50%', height:'auto', backgroundColor:'yellow'}}></div> */}
>>>>>>> origin/experimental-drag-drop-rupert
    </>
  )
}
export default FoodGroups
