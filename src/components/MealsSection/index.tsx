import { SectionList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MealCard } from "@components/MealCard";

import { MealsSectionTitle } from "./styles";

import { IMeals } from "@screens/Home";

type Props = {
  meals: IMeals
}

export function MealsSection({ meals }: Props) {
  const navigation = useNavigation()

  function handleMealButton() {
    navigation.navigate('meal')
  }
 
  return (
    <SectionList
      sections={meals}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <MealCard
          time={item.time}
          title={item.title}
          status={item.status}
          onPress={handleMealButton}
        />
      )}
      renderSectionHeader={({section: {title}}) => (
        <MealsSectionTitle>{title}</MealsSectionTitle>
      )}
      showsVerticalScrollIndicator={false}
    />
  )
}