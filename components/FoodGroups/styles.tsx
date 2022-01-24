import { DAIRY, FRUIT, GRAINS, MEAT, VEGETABLES } from './groups'

const str = (classNames: string[]) => classNames.join(' ')

export const dragDrop = str(['z-20', '!relative', 'row-start-1', 'col-start-1'])

export const customImg = str([
  'object-contain',
  '!w-full',
  '!relative',
  '!height'
])

export const unsetImg = str(['flex', 'relative', 'w-[30]'])

const scale = 1.45
const imgBase = str(['select-none', 'relative'])
export const sliceStyles: Record<string, string> = {
  [DAIRY]: str([
    `w-[${22.6 * scale}]`,
    `mt-${31 * scale}%`,
    `ml-${50 - 7 * scale}%`,
    ...imgBase
  ]),

  [MEAT]: str([
    `w-[${28 * scale}]`,
    `ml-${50 - 27.9 * scale}%`,
    `mt-${29.5 * scale}%`,
    ...imgBase
  ]),

  [FRUIT]: str([
    `w-[${28.5 * scale}]`,
    `mt-${29.6 * scale}%`,
    `ml-${50 - 0.1 * scale}%`,
    ...imgBase
  ]),

  [VEGETABLES]: str([
    `w-[${30 * scale}]`,
    `ml-${50 - 0.3 * scale}%`,
    ...imgBase
  ]),

  [GRAINS]: str([`w-[${30 * scale}]`, `ml-${50 - 30 * scale}%`, ...imgBase])
}

export const sliceBaseStyle = str([
  'z-0',
  'transition',
  'duration-500',
  'ease-in-out',
  'scale-wheel',
  'select-none'
])
