export type MealStorageDTO = {
  id?: string
  name: string
  description: string
  date: string
  time: string
  mealWithinTheDiet: 'yes' | 'not'
}