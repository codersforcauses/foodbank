let initialCoordinates = [
    [20, 520, 140, 10, 415, 445, 200, 525], // dairy
    [10, 150, 250, 70, 410, 5, 320, 420, 125, 325], //meat
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


const resize_map = (previousWidth, coordinates, setPreviousWidth, setCoordinates) => {
    let newCoordinates: number[][] = []
    let newPreviousWidth: { id: string; initialWidth: number }[] = []

    previousWidth.map((width, index) => {
        let newWidth = document.getElementById(previousWidth[index]["id"]).clientWidth
        let ratio = newWidth / width["initialWidth"]

        let new_coordinates = coordinates[index].map(coordinate => {
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

export { resize_map, initialCoordinates, initialWidths }
