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
  finalShot: string
  ingredientsImg: string
  equipmentImg: string
  colorSchemeName: string // getAllRecipes() does not have this field
  colorScheme?: ColorScheme // getRecipeDetails() does not have this field
  hint?: string
  page_id?: string
}

interface RecipeStep {
  number: number // this is suppose to be a string
  image: string // Used to be StaticImageData
  description: string
}

interface Character {
  name: string
  image?: string // Do we need this?
  aliasName: string
  about: string
  aliasImage: string
  imageGif: string
  superPowers: string
  foodGroup: string
  location: string[] // Used to be just string
  facing?: string
}

type Breakpoints = 'sm'| 'md' | 'lg' | 'xl' | '2xl'

//TODO: Fix the API to return ColorScheme as a required parameter. Just random values atm

export type { ColorScheme, Recipe, RecipeStep, Character, Breakpoints}

