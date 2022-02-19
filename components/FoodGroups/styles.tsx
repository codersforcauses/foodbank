import { GROUPS } from './groups'

const str = (classNames: string[]) => classNames.join(' ')

export const dragDrop = str([
  'lg:w-[12%]',
  'md:w-[12%]',
  'w-1/4',
  'h-fit',
  'z-20',
  '!absolute',
  'row-start-1',
  'col-start-1',
  // 'bg-red',
  'transition',
  'ease-in',
  'duration-100',
  'scale-100',
  'hover:scale-110'
])

export const customImg = str([
  'object-contain',
  '!w-full',
  '!relative',
  '!h-[unset]'
])

export const unsetImg = str(['flex', 'relative', 'w-[30]'])

const SCALE = 1.45 // Arbitrary scale multiplier to make wheel fit within div completely

interface SliceDimensions {
  width?: string | number
  marginTop?: string | number
  marginLeft?: string | number
}

export const sliceDimensions: Record<string, SliceDimensions> = {
  [GROUPS.DAIRY]: {
    width: `${22.6 * SCALE}%`,
    marginTop: `${31 * SCALE}%`,
    marginLeft: `${50 - 7 * SCALE}%`
  },

  [GROUPS.MEAT]: {
    width: `${28 * SCALE}%`,
    marginTop: `${29.5 * SCALE}%`,
    marginLeft: `${50 - 27.9 * SCALE}%`
  },

  [GROUPS.FRUIT]: {
    width: `${28.5 * SCALE}%`,
    marginTop: `${29.6 * SCALE}%`,
    marginLeft: `${50 - 0.1 * SCALE}%`
  },
  [GROUPS.VEGETABLES]: {
    width: `${30 * SCALE}%`,
    marginLeft: `${50 - 0.3 * SCALE}%`
  },

  [GROUPS.GRAINS]: {
    width: `${30 * SCALE}%`,
    marginLeft: `${50 - 30 * SCALE}%`
  }
}

export const sliceBaseStyle = str([
  'z-0',
  'transition',
  'duration-500',
  'ease-in-out',
  'scale-wheel',
  'relative',
  'select-none'
])

export const startZoneStyle = 'text-2xl grow h-[50vh] lg:h-[80vh]'

export const draggableZoneStyle =
  'flex justify-center relative flex-wrap md:flex-nowrap w-screen lg:h-auto'

export const zoom = ['transform', 'scale-105', 'z-10']
