import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';
import { mealGetAll } from './mealGetAll';

import { MealStorageDTO } from './mealStorageDTO';

export async function mealEdit(mealData: MealStorageDTO) {
  try {
    const storagedMeals = await mealGetAll();

    let cloneStoragedMeals = [...storagedMeals];

    const mealsEdited = cloneStoragedMeals.map(meal => {
      if (meal.id === mealData.id) {
        return mealData;
      } else {
        return meal;
      }
    })

    const storage = JSON.stringify(mealsEdited);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
} 