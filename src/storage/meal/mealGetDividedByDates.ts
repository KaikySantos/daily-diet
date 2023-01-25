import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { MealStorageDTO } from './mealStorageDTO';

export async function mealGetDividedByDates() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    const dates = [...new Set(meals.map(meal => meal.date))]

    const mealList = (dates.map(date => {
      return {
        title: date,
        data: meals.filter(meal => meal.date === date),
      }
    }))

    const sortedMealListDate = mealList.sort((a, b) => {
      const [dayA, monthA, yearA] = a.title.split('/').map(item => Number(item));
      const [dayB, monthB, yearB] = b.title.split('/').map(item => Number(item));

      if (yearA < yearB) {
        return 1
      } else if (yearA > yearB) {
        return -1
      }

      if (monthA < monthB) {
        return 1
      } else if (monthA > monthB) {
        return -1
      }

      if (dayA < dayB) {
        return 1
      } else {
        return -1
      }
    })

    const sortedMealListTime = sortedMealListDate.map((meals) => {
      const newData = meals.data.sort((a, b) => {
        const [hourA, minuteA] = a.time.split(':').map(item => Number(item));
        const [hourB, minuteB] = b.time.split(':').map(item => Number(item));

        if (hourA < hourB) {
          return 1;
        } else if (hourA > hourB) {
          return -1;
        }

        if (minuteA < minuteB) {
          return 1
        } else {
          return -1
        }
      })

      return {
        title: meals.title,
        data: newData
      }
    })

    return sortedMealListTime;
  } catch (error) {
    throw error;
  }
} 