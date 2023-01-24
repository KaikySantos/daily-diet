import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { MealStorageDTO } from './mealStorageDTO';

export async function mealGetDividedByDates() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    const dates = [...new Set(meals.map(meal => meal.date))]

    const mealList = dates.map(date => {
      return {
        title: date,
        data: meals.filter(meal => meal.date === date),
      }
    })

    mealList.forEach(meal => {
      console.log("DATA: ", meal.title)
      console.log("Refeições: ")
      meal.data.forEach(mealItem => console.log(mealItem ))
    })

    return mealList;
  } catch (error) {
    throw error;
  }
} 