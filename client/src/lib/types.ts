export interface Recipe {
  id: string
  name: string
  relatedCharacters: Array<string>
  ingredients: Array<string>
  description: string
  image: string
}
