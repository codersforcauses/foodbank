// import StaticImageData from 'next/Image'

interface ColorScheme {
  name: string
  bg: string
  header: string
  text: string
  buttonText: string
  buttonBg: string
}

interface Recipe {
  slug: string
  name: string
  category: string[]
  character?: Character
  tags: string[]
  equipment: string[]
  ingredients: string[]
  steps: RecipeStep[]
  finalShot: StaticImageData | string
  ingredientsImg: StaticImageData | string
  equipmentImg: StaticImageData | string
  colorSchemeName?: string // getAllRecipes() does not have this field
  colorScheme?: ColorScheme // getRecipeDetails() does not have this field
  hint?: string
  page_id?: string
}

interface RecipeStep {
  number: number // this is suppose to be a string
  image: StaticImageData | string
  description: string
}

interface Character {
  name: string
  image: string
  aliasName: string
  about: string
  aliasImage: string
  imageGif: string
  superpowers: string
  foodGroup: string
  location?: string
  facing?: string
  heroUse: string
  heroLikes: string
  everydayLikes: string
  recipes: string
}

interface Trophy {
  name: string
  unlocked: boolean
}

type Breakpoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

//TODO: Fix the API to return ColorScheme as a required parameter. Just random values atm

interface Location {
  id: string
  headerColor: string
  headerText: string
  captionText: string
  showButton: boolean
  maxWidth: string
  maxHeight: string
  route: string
}

export type {
  Breakpoints,
  Character,
  ColorScheme,
  Location,
  Recipe,
  RecipeStep,
  Trophy
}
