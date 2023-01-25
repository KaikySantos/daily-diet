import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

import { mealGetAll } from "./mealGetAll";

export async function mealRemoveById(mealId: string) {
  try {
    const storagedMeal = await mealGetAll();
    const meals = storagedMeal.filter(meal => meal.id !== mealId);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
  } catch (error) {
    throw error;
  }
}