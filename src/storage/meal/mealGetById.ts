import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

import { MealStorageDTO } from './mealStorageDTO';

export async function mealGetById(mealId: string) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)
    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    const meal = meals.find(item => item.id === mealId)

    if (!meal) {
      throw new AppError('Refeição não encontrada!');
    }

    return meal;
  } catch (error) {
    throw error;
  }
} 