import { mealGetAll } from './mealGetAll';

export async function mealGetDashboardInfo() {
  try {
    const meals = await mealGetAll();

    const mealsTotal = meals.length;
    const mealsWithinTheDiet = meals.reduce((total, item) => {
      return item.mealWithinTheDiet === 'yes' ? total + 1 : total;
    }, 0)
    const offDietMeals = mealsTotal - mealsWithinTheDiet;
    const percentage = Number(((mealsWithinTheDiet * 100) / mealsTotal).toFixed(2));

    console.log(mealsTotal);

    return {
      percentage,
      mealsTotal,
      mealsWithinTheDiet,
      offDietMeals,
    };
  } catch (error) {
    throw error;
  }
} 