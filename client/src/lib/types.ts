export interface Recipe {
  slug: string
  name: string
  category: string
  tags: Array<string>
  equipment: Array<string>
  ingredients: Array<string>
  finalShot: string
  ingredientsImg: string
  equipmentImg: string
  bgColor: string
  headColor: string
  textColor: string
  buttonTextColor: string
}
