export type Trophy = {
  name: string
  unlocked: boolean
}

export type Character = {
  name: string
  image?: string
  aliasName: string
  about: string
  aliasImage: string
  imageGif: string
  superPowers: string
  foodGroup: string
  location: string | string[]
  facing?: string
}
