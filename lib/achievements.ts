import type { Achievement } from 'lib/types'
import dairy from 'public/images/achievements/Dairy.png'
import fruit from 'public/images/achievements/Fruit.png'
import grains from 'public/images/achievements/Grains.png'
import meat from 'public/images/achievements/Meat.png'
import vegetables from 'public/images/achievements/Vegetables.png'

const achievementsList: Array<Achievement> = [
  {
    title: 'Dairy Demon',
    slug: 'dairy-demon',
    image: dairy,
    unlocked: false,
    progress: 2,
    total: 4
  },
  {
    title: 'Fruit Fanatic',
    slug: 'fruit-fanatic',
    image: fruit,
    unlocked: true,
    progress: 6,
    total: 6
  },
  {
    title: 'Glorious Grains',
    slug: 'glorious-grains',
    image: grains,
    unlocked: true,
    progress: 7,
    total: 7
  },
  {
    title: 'Mighty Meat',
    slug: 'mighty-meat',
    image: meat,
    unlocked: false,
    progress: 1,
    total: 5
  },
  {
    title: 'Victorious Vegetables',
    slug: 'victorious-vegetables',
    image: vegetables,
    unlocked: false,
    progress: 4,
    total: 7
  }
]

const achievements: Map<string, Achievement> = new Map(
  achievementsList.map(achievement => [achievement.slug, achievement])
)

export default achievements
