import { mealGetAll } from './mealGetAll';
import { mealGetDividedByDates } from './mealGetDividedByDates';

export async function mealGetDashboardInfo() {
  try {
    const meals = await mealGetAll();

    const mealsTotal = meals.length;
    const mealsWithinTheDiet = meals.reduce((total, item) => {
      return item.mealWithinTheDiet === 'yes' ? total + 1 : total;
    }, 0)
    const offDietMeals = mealsTotal - mealsWithinTheDiet;
    const percentage = Number(((mealsWithinTheDiet * 100) / mealsTotal).toFixed(2));

    const mealsDividedByDates = await mealGetDividedByDates();
    let bestSequel = 0;
    let currentSequence = 0;
    mealsDividedByDates.forEach(mealSection => {
      mealSection.data.forEach(meal => {
        console.log(meal.mealWithinTheDiet);
        if (meal.mealWithinTheDiet === 'yes') {
          currentSequence += 1;
        }
      })

      if (currentSequence > bestSequel) {
        bestSequel = currentSequence;
      }
      currentSequence = 0;
    })

    return {
      percentage,
      bestSequel,
      mealsTotal,
      mealsWithinTheDiet,
      offDietMeals,
    };
  } catch (error) {
    throw error;
  }
} 