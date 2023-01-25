import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import {
  Container,
  Header,
  Logo,
  MealsTitle,
  UserIcon
} from "./styles";

import logoImg from '@assets/logo.png';

import { Button } from "@components/Button";
import { PercentButton } from "@components/PercentButton";
import { MealsSection } from "@components/MealsSection";

import { mealGetDividedByDates } from "@storage/meal/mealGetDividedByDates";

import { MealStorageDTO } from '@storage/meal/mealStorageDTO'
import { mealGetDashboardInfo } from "@storage/meal/mealGetDashboardInfo";

export type MealDiviedBySection = {
  title: string
  data: MealStorageDTO[]
}

export function Home() {
  const navigation = useNavigation()

  const [meals, setMeals] = useState<MealDiviedBySection[]>([])
  const [percentage, setPercentage] = useState(0);

  function handlePercentButton() {
    navigation.navigate('statistics')
  }

  function handleNewMeal() {
    navigation.navigate('mealForm')
  }

  async function fetchMeals() {
    try {
      const storage = await mealGetDividedByDates();

      setMeals(storage);

      const statistics = await mealGetDashboardInfo();
      setPercentage(statistics.percentage);
    } catch (error) {
      console.log(error);
      Alert.alert('Refeições', 'Não foi possível carregar as refeições.');
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeals()
  }, []))

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />

        <UserIcon />
      </Header>

      <PercentButton percentage={percentage} onPress={handlePercentButton} />

      <MealsTitle>Refeições</MealsTitle>
      <Button
        icon="add"
        title="Nova refeição"
        onPress={handleNewMeal}
      />

      <MealsSection meals={meals} />
    </Container>
  )
}