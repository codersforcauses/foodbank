import React from 'react'
import { Recipe } from 'lib/types'
import Image from 'next/image'
import styles from 'components/Recipe/Overview/overview.module.css'

import imgFrameOne from 'public/images/Extra/img-frame-white-border.png'
import headerPlateOne from 'public/images/Extra/header-plate-1.png'

interface Props {
  recipe: Recipe
}

/**
 * Displays a list of required equipment along with an image.
 */
const EquipmentList: React.FC<Props> = ({ recipe }) => {
  const colorScheme = recipe.colorScheme
  return (
      <div className="flex flex-col">
          <div className="flex flex-col justify-center">
              <img
                  className={styles["header-plate"] + ' static'}
                  src={headerPlateOne.src}
                  alt='Equipment'
              />
              <h1 className={'static font-serif pb-8 ' + colorScheme.header + " " + styles["ingredients-header"]}>
                  Equipment
              </h1>
          </div>
          <div className={styles["content-block"] + ' flex flex-row justify-center flex-wrap'}>
              <div className={styles["ingredients-text"] + ' flex flex-shrink-0 font-semibold font-serif'}>
                  <ul>
                      {recipe.equipment.map(el => (

                          <li key={el}>
                              - {el}
                          </li>
                      ))}
                  </ul>
              </div>
              <div className={styles["image-box-1"] + ' flex'}>
                  {/*<img*/}
                  {/*    className={styles["frame-image"] + ' static'}*/}
                  {/*    src={imgFrameOne.src}*/}
                  {/*    alt='frame-one'*/}
                  {/*/>*/}
                  <img
                      className={styles["ingredients-image"] + ' rounded-3xl static'}
                      src={recipe.equipmentImg.src}
                      alt='equipment'
                  />
              </div>
          </div>
      </div>
  )
}

export default EquipmentList
