interface ColorScheme {
  bg: string
  header: string
  text: string
  buttonText: string
  buttonBg: string
}

interface Recipe {
  slug: string
  name: string
  category: string
  character?: Character
  tags: Array<string>
  equipment: Array<string>
  ingredients: Array<string>
  steps: Array<RecipeStep>
  finalShot: string
  ingredientsImg: string
  equipmentImg: string
  colorScheme: ColorScheme
  hint?: string
}

interface RecipeStep {
  number: number
  image: string
  description: string
}

interface Character {
  name: string
  image: string
  aliasName: string
  about: string
  aliasImage: string
  imageGif: string
  superPowers: string
  foodGroup: string
  location: string
  facing?: string

}
export type { ColorScheme, Recipe, RecipeStep, Character }
