import React, {useState} from 'react'
import dairy from 'public/images/FoodGroups/dairy-shadow.png'
import meat from 'public/images/FoodGroups/meat-shadow.png'
import fruit from 'public/images/FoodGroups/fruit-shadow.png'
import grains from 'public/images/FoodGroups/grains-shadow.png'
import vegetables from 'public/images/FoodGroups/vegetables-shadow.png'

import styles from 'components/FoodGroups/foodgroups.module.css'
import FoodGroupModal from "@components/FoodGroups/Modal";

import Image from "next/image";

/**
 * A page displaying all food groups in a pie chart
 */
const FoodGroups: React.FC = () => {

    const [modalState, setModalState] = useState(false);

    const toggleModal = () => {
        setModalState(!modalState)
    }

    const foodGroupData = {
        name: "sdsdsd"
    }

    return (
        <div className="flex justify-center">
            {modalState && <FoodGroupModal toggleModal={toggleModal} data={foodGroupData}/>}
            <div className={"flex flex-col"}>
                <div className={styles['img-dairy'] + ' transform hover:scale-105 transition duration-500 ease-in-out'}>
                    <Image src={dairy.src}
                           alt='dairy'
                           // onClick={toggleModal}
                           layout="fill" // required
                        className={styles['custom-img']}
                    />
                </div>

                <div className={styles['img-meat'] + ' transform hover:scale-105 transition duration-500 ease-in-out'}>
                    <Image src={meat.src}
                           alt='meat'
                        // onClick={toggleModal}
                           layout="fill" // required
                           className={styles['custom-img']}
                    />
                </div>

                <div className={styles['img-fruit'] + ' transform hover:scale-105 transition duration-500 ease-in-out'}>
                    <Image src={fruit.src}
                           alt='fruit'
                        // onClick={toggleModal}
                           layout="fill" // required
                           className={styles['custom-img']}
                    />
                </div>

                <div className={styles['img-vegetables'] + ' transform hover:scale-105 transition duration-500 ease-in-out'}>
                    <Image src={vegetables.src}
                           alt='vegetables'
                        // onClick={toggleModal}
                           layout="fill" // required
                           className={styles['custom-img']}
                    />
                </div>

                <div className={styles['img-grains'] + ' transform hover:scale-105 transition duration-500 ease-in-out'}>
                    <Image src={grains.src}
                           alt='grains'
                        // onClick={toggleModal}
                           layout="fill" // required
                           className={styles['custom-img']}
                    />
                </div>
                
                
                {/*<img src={meat.src} alt='meat'*/}
                {/*     className={styles["meat"] + ' transform hover:scale-105 absolute ' +*/}
                {/*     'transition duration-500 ease-in-out'}/>*/}
                {/*<img src={fruit.src} alt='explosion'*/}
                {/*     className={styles["fruit"] + ' transform hover:scale-105 absolute ' +*/}
                {/*     'transition duration-500 ease-in-out'}/>*/}
                {/*<img src={vegetables.src} alt='explosion'*/}
                {/*     className={styles["vegetables"] + ' transform hover:scale-105 absolute ' +*/}
                {/*     'transition duration-500 ease-in-out'}/>*/}
                {/*<img src={grains.src} alt='explosion'*/}
                {/*     className={styles["grains"] + ' transform hover:scale-105 absolute ' +*/}
                {/*     'transition duration-500 ease-in-out'}/>*/}
            </div>
        </div>
    )
}
export default FoodGroups
