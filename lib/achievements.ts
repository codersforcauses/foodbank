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
    unlocked: false,
    progress: 2,
    total: 4
  },
  {
    title: 'Fruit Fanatic',
    image: fruit,
    unlocked: true,
    progress: 6,
    total: 6
  },
  {
    title: 'Glorious Grains',
    image: grains,
    unlocked: true,
    progress: 7,
    total: 7
  },
  {
    title: 'Mighty Meat',
    image: meat,
    unlocked: false,
    progress: 1,
    total: 5
  },
  {
    title: 'Victorious Vegetables',
    image: vegetables,
    unlocked: false,
    progress: 4,
    total: 7
  }
]

export default achievements
