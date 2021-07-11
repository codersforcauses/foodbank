import type { Achievement } from 'lib/types'
import dairy from 'public/images/achievements/Dairy.png'
import fruit from 'public/images/achievements/Fruit.png'
import grains from 'public/images/achievements/Grains.png'
import meat from 'public/images/achievements/Meat.png'
import vegetables from 'public/images/achievements/Vegetables.png'

const achievements: Array<Achievement> = [
  {
    title: 'Dairy Demon',
    image: dairy,
    unlocked: true,
    progress: 100
  },
  {
    title: 'Fruit Fanatic',
    image: fruit,
    unlocked: false,
    progress: 80
  },
  {
    title: 'Glorious Grains',
    image: grains,
    unlocked: false,
    progress: 60
  },
  {
    title: 'Mighty Meat',
    image: meat,
    unlocked: false,
    progress: 40
  },
  {
    title: 'Victorious Vegetables',
    image: vegetables,
    unlocked: false,
    progress: 20
  }
]

export default achievements
