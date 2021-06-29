/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AnimatedNumber from 'animated-number-react'
import Konva from 'konva'
import * as React from 'react'
import { allFoods, backgrounds, getAndRemoveItem, FoodImage } from './helper'
import useGameAlert from './useGameAlert'

const TOTAL_FOOD = allFoods.length
const width = window.innerWidth
const height = window.innerHeight

const stage = new Konva.Stage({
  container: 'dank',
  width: width,
  height: height
})

const layer = new Konva.Layer()
stage.add(layer)

const tempLayer = new Konva.Layer()
stage.add(tempLayer)

const drawBoard = () => {
  const drawImage = ({ scale, x, y, px, py, start, end, len, name }: any) =>
    function () {
      const group = new Konva.Group({
        x,
        y,
        clipFunc: function (ctx) {
          ctx.beginPath()
          ctx.moveTo(px, py)
          ctx.arc(px, py, len, start, Math.PI - end, false)
        }
      })
      const options = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        image: this,
        name,
        scaleX: scale,
        scaleY: scale
      } as any

      const konvaImage = new Konva.Image(options)

      group.add(konvaImage)
      layer.add(group)

      layer.draw()
    }

  backgrounds.forEach(b => {
    const image = new Image()
    image.onload = drawImage(b)
    image.src = b.src
  })
}

const categorisedCharNames: string[] = []

const Game: React.FC = () => {
  const [currentCharacter, setCurrentCharacter] = React.useState<any>()
  const [remainingCharacters, setRemainingCharacters] = React.useState<
    FoodImage[]
  >(allFoods)

  const { error, success, finishGame } = useGameAlert()

  const getAndUpdateRandomChar = () => {
    // handle game end
    let availableChars: FoodImage[] = remainingCharacters
    if (!remainingCharacters.length) {
      finishGame()
      setRemainingCharacters(allFoods)
      availableChars = allFoods
    }
    const [randomChar, updated] = getAndRemoveItem(availableChars, 'image')
    setRemainingCharacters(updated)

    if (!randomChar) return

    setTimeout(() => {
      Konva.Image.fromURL(randomChar.image, function (image: any) {

        // Scaling image based on original size. Currently uses a hacky way to do it but made the images more consistent in size
        const imageHeight = image.attrs.image.height
        const desiredHeight = 169
        const scale = desiredHeight/imageHeight
        
        image.setAttrs({
          x: stage.width() / 1.4,
          y: stage.height() / 2,
          scaleX: scale,
          scaleY: scale,
          draggable: true,
          name: randomChar.name,
          foodGroup: randomChar.type
        })

        image.on('mouseover', function () {
          document.body.style.cursor = 'pointer'
        })
        image.on('mouseout', function () {
          document.body.style.cursor = 'default'
        })

        // add the shape to the layer
        layer.add(image)
        layer.draw()

      })
    }, 0)
  }

  function getCurrentCharacter(): {
    name: string | undefined
    foodGroup: string | undefined
  } {
    const { name, foodGroup } = currentCharacter?.target?.attrs || {}
    return { name, foodGroup }
  }

  const handleRemoveSuccess = ({
    name,
    foodGroup
  }: {
    name: string
    foodGroup: string
  }) => {
    success({ name, foodGroup })
    setCurrentCharacter(null)
    getAndUpdateRandomChar()
    categorisedCharNames.push(name)
  }

  const removeCharacter = (
    name: string,
    foodGroup: string,
    currentFoodGroup: string
  ) => {
    const found = stage.find(`.${name}`)
    if (foodGroup === currentFoodGroup) {
      if (found) {
        found.each(f => {
          f.destroy()
          return f.hide()
        })
        handleRemoveSuccess({ name, foodGroup })
      } else {
        alert(`${name} is not found in the canvas GG 🔥`)
      }
    } else {
      error({ name, foodGroup })
    }
  }

  React.useEffect(getAndUpdateRandomChar, [])

  React.useEffect(drawBoard, [])

  React.useEffect(() => {
    stage.on('dragstart', function (e) {
      setCurrentCharacter(e)
      e.target.moveTo(tempLayer)
      layer.draw()
    })
    let previousShape: any
    stage.on('dragmove', function (evt) {
      const pos = stage.getPointerPosition() as any
      const shape = layer.getIntersection(pos)
      if (previousShape && shape) {
        if (previousShape !== shape) {
          // leave from old targer
          previousShape?.fire(
            'dragleave',
            {
              type: 'dragleave',
              target: previousShape,
              evt: evt.evt
            },
            true
          )

          // enter new targer
          shape?.fire(
            'dragenter',
            {
              type: 'dragenter',
              target: shape,
              evt: evt.evt
            },
            true
          )
          previousShape = shape
        } else {
          previousShape.fire(
            'dragover',
            {
              type: 'dragover',
              target: previousShape,
              evt: evt.evt
            },
            true
          )
        }
      } else if (!previousShape && shape) {
        previousShape = shape
        shape.fire(
          'dragenter',
          {
            type: 'dragenter',
            target: shape,
            evt: evt.evt
          },
          true
        )
      } else if (previousShape && !shape) {
        previousShape?.fire(
          'dragleave',
          {
            type: 'dragleave',
            target: previousShape,
            evt: evt.evt
          },
          true
        )
        previousShape = undefined
      }
    })
    stage.on('dragend', function (e) {
      const pos = stage.getPointerPosition() as any

      const shape = layer.getIntersection(pos)
      if (shape) {
        previousShape?.fire(
          'drop',
          {
            type: 'drop',
            target: previousShape,
            evt: e.evt
          },
          true
        )
      }
      previousShape = undefined
      e.target.moveTo(layer)
      layer.draw()
      tempLayer.draw()
    })

    stage.on('dragenter', function () {
      layer.draw()
    })

    stage.on('dragleave', function () {
      layer.draw()
    })

    stage.on('dragover', function () {
      layer.draw()
    })
  }, [])

  const setOnDrop = () => {
    stage.on('drop', (e: any) => {
      const { name, foodGroup: currentFoodGroup } = getCurrentCharacter()
      if (
        !name ||
        !currentFoodGroup ||
        categorisedCharNames.some(categorised => categorised === name)
      )
        return

      const foodGroup = e.target.attrs.name

      removeCharacter(name, foodGroup, currentFoodGroup)
      layer.draw()
      tempLayer.draw()
    })
  }

  React.useEffect(setOnDrop, [currentCharacter?.target?.attrs?.name])

  return (
    <main>
      <header className='flex justify-around'>
        <h2 className='text-5xl font-thin'>
          Score:{' '}
          <AnimatedNumber
            value={TOTAL_FOOD - remainingCharacters.length - 1}
            formatValue={(value: number) => value.toFixed(1)}
          />
        </h2>
        <h2 className='text-5xl font-thin'>
          Remaining Food: {remainingCharacters.length}
        </h2>
      </header>
    </main>
  )
}

export default Game
