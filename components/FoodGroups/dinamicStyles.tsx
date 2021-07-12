import dairy from 'public/images/FoodGroups/dairy-shadow.png'
import meat from 'public/images/FoodGroups/meat-shadow.png'
import fruit from 'public/images/FoodGroups/fruit-shadow.png'
import grains from 'public/images/FoodGroups/grains-shadow.png'
import vegetables from 'public/images/FoodGroups/vegetables-shadow.png'

import { FoodGroupImage } from "@components/FoodGroups/types"

let initialCoordinates = [
    [20, 520, 140, 10, 415, 445, 200, 525], // dairy
    [5, 140, 410, 5, 320, 420, 125, 325], //meat
    [20, 10, 410, 115, 250, 350], // fruit
    [10, 5, 325, 160, 410, 500, 10, 400], // vegetables
    [40, 540, 50, 270, 200, 70, 410, 5, 410, 410]] // grains

let initialWidths = [
    {
        id: "dairy-img",
        initialWidth: 433
    },
    {
        id: "meat-img",
        initialWidth: 424
    },
    {
        id: "fruit-img",
        initialWidth: 420
    },
    {
        id: "vegetables-img",
        initialWidth: 422
    },
    {
        id: "grains-img",
        initialWidth: 424
    },
]

const foodGroupsImages: FoodGroupImage[] = [
    {
        div_id: "dairy",
        img_styles: 'img-dairy',
        img_id: "dairy-img",
        img_src: dairy.src,
        map_name: "dairy_map"

    },
    {
        div_id: "meat",
        img_styles: 'img-meat',
        img_id: "meat-img",
        img_src: meat.src,
        map_name: "meat_map"

    },
    {
        div_id: "fruit",
        img_styles: 'img-fruit',
        img_id: "fruit-img",
        img_src: fruit.src,
        map_name: "fruit_map"

    },
    {
        div_id: "vegetables",
        img_styles: 'img-vegetables',
        img_id: "vegetables-img",
        img_src: vegetables.src,
        map_name: "vegetables_map"

    },
    {
        div_id: "grains",
        img_styles: 'img-grains',
        img_id: "grains-img",
        img_src: grains.src,
        map_name: "grains_map"

    },
]



const resize_map = (previousWidth, coordinates, setPreviousWidth, setCoordinates) => {
    let newCoordinates: number[][] = []
    let newPreviousWidth: { id: string; initialWidth: number }[] = []

    previousWidth.map((width: { [x: string]: number }, index: string | number) => {
        let newWidth = document.getElementById(width.id).clientWidth
        let ratio = newWidth / width["initialWidth"]

        let new_coordinates = coordinates[index].map((coordinate: number) => {
            return coordinate * ratio
        })
        newCoordinates.push(new_coordinates)

        newPreviousWidth.push({
            "id": previousWidth[index]["id"],
            "initialWidth": newWidth
        })
    })
    
    setPreviousWidth(newPreviousWidth)
    setCoordinates(newCoordinates)
}

const handleMouseOver = (group_id, { allstates }) => {
    const {
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
    } = allstates
    
    
    let styles
    let zoom = ["transform", "scale-105", "z-10"]
    switch (group_id) {
        case "meat":
            styles = [...meatStyles, ...zoom]
            setMeatStyles(styles)
            setDairyStyles([""])
            setGrainsStyles([""])
            break
        case "grains":
            styles = [...grainsStyles, ...zoom]
            setGrainsStyles(styles)
            setMeatStyles([""])
            setVegetablesStyles([""])
            break
        case "dairy":
            styles = [...dairyStyles, ...zoom]
            setDairyStyles(styles)
            setMeatStyles([""])
            setFruitStyles([""])
            break
        case "fruit":
            styles = [...fruitStyles, ...zoom]
            setFruitStyles(styles)
            setDairyStyles([""])
            setVegetablesStyles([""])
            break
        case "vegetables":
            styles = [...vegetablesStyles, ...zoom]
            setVegetablesStyles(styles)
            setGrainsStyles([""])
            setFruitStyles([""])
            break
    }
}

const handleMouseOut = (group_id, { allstates }) => {
    const {
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
    } = allstates
    
    // const group_id = e.target.parentNode.parentNode.attributes["id"].value
    let styles
    switch (group_id) {
        case "meat":
            setGrainsStyles(["z-5"])
            setDairyStyles(["z-10"])
            setMeatStyles(["z-0"])
            setFruitStyles(["z-0"])
            setVegetablesStyles(["z-0"])
            break
        case "grains":
            setMeatStyles(["z-10"])
            setVegetablesStyles(["z-10"])
            setGrainsStyles(["z-0"])
            setDairyStyles(["z-0"])
            break
        case "dairy":
            setMeatStyles(["z-10"])
            setFruitStyles(["z-10"])
            setDairyStyles(["z-0"])
            setGrainsStyles(["z-0"])
            setVegetablesStyles(["z-0"])
            break
        case "fruit":
            setDairyStyles(["z-10"])
            setVegetablesStyles(["z-5"])
            setFruitStyles(["z-0"])
            setGrainsStyles(["z-0"])
            setMeatStyles(["z-0"])

            break
        case "vegetables":
            setGrainsStyles(["z-10"])
            setFruitStyles(["z-10"])
            setDairyStyles(["z-0"])
            setVegetablesStyles(["z-0"])

            break
    }
}

export { resize_map, initialCoordinates, initialWidths, handleMouseOver, handleMouseOut, foodGroupsImages }
