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
  bgColor: string
  headColor: string
  textColor: string
  buttonTextColor: string
}

interface RecipeStep {
  number: number
  image: string
  description: string
}

export type { Recipe, RecipeStep }
