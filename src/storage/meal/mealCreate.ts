import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { mealGetAll } from '@storage/meal/mealGetAll';

import { MealStorageDTO } from './mealStorageDTO';

export async function mealCreate(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await mealGetAll()

    const storage = JSON.stringify([...storedMeals, {
      id: uuid.v4(),
      ...newMeal,
    }])

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error;
  }
} 