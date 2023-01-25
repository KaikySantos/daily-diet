import { SectionList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MealCard } from "@components/MealCard";

import { MealsSectionTitle } from "./styles";

import { MealDiviedBySection } from "@screens/Home";

type Props = {
  meals: MealDiviedBySection[]
}

export function MealsSection({ meals }: Props) {
  const navigation = useNavigation()

  function handleMealButton(mealId: string) {
    navigation.navigate('meal', { mealId })
  }
 
  return (
    <SectionList
      sections={meals}
      keyExtractor={(item) => item.id as string}
      renderItem={({item}) => (
        <MealCard
          time={item.time}
          title={item.name}
          status={item.mealWithinTheDiet === 'yes' ? 'green' : 'red'}
          onPress={() => handleMealButton(item.id as string)}
        />
      )}
      renderSectionHeader={({section: {title}}) => (
        <MealsSectionTitle>{title}</MealsSectionTitle>
      )}
      showsVerticalScrollIndicator={false}
    />
  )
}