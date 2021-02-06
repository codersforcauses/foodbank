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
  tags: Array<string>
  equipment: Array<string>
  ingredients: Array<string>
  steps: Array<RecipeStep>
  finalShot: string
  ingredientsImg: string
  equipmentImg: string
  colorScheme: ColorScheme
}

interface RecipeStep {
  number: number
  image: string
  description: string
}
export type { ColorScheme, Recipe, RecipeStep }
