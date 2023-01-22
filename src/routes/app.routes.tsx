import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

import { Home } from '@screens/Home'
import { MealForm } from '@screens/MealForm'
import { Statistics } from '@screens/Statistics'

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="statistics" component={Statistics} />

      <Screen name="mealForm" component={MealForm} />
    </Navigator>
  )
}