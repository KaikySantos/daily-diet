import { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { StatisticHeader } from "@components/StatisticHeader";

import { Card, CardRow, CardText, CartTitle, Container, Content, Title } from "./styles";

import { mealGetDashboardInfo } from '@storage/meal/mealGetDashboardInfo';

export function Statistics() {
  const [percentage, setPercentage] = useState(0);
  const [mealsTotal, setMealsTotal] = useState(0);
  const [mealsWithinTheDiet, setMealsWithinTheDiet] = useState(0);
  const [offDietMeals, setOffDietMeals] = useState(0);

  const { COLORS: { GREEN_LIGHT, RED_LIGHT } } = useTheme();

  const isNegative = percentage < 50;
  const containerColor = !isNegative ? GREEN_LIGHT : RED_LIGHT;
  
  async function fetchData() {
    try {
      const storage = await mealGetDashboardInfo();

      setPercentage(storage.percentage);
      setMealsTotal(storage.mealsTotal);
      setMealsWithinTheDiet(storage.mealsWithinTheDiet);
      setOffDietMeals(storage.offDietMeals);
    } catch (error) {
      console.log(error);
      Alert.alert('Refeições', 'Não foi possível carregar as estatísticas.');
    }
  }

  useFocusEffect(useCallback(() => {
    fetchData()
  }, []))

  return (
    <Container background={containerColor} >
      <StatisticHeader percentage={percentage} />

      <Content>
        <Title>Estatísticas gerais</Title>

        <CardRow>
          <Card background="default">
            <CartTitle>0000000000000</CartTitle>
            <CardText>melhor sequência de pratos dentro da dieta</CardText>
          </Card>
        </CardRow>

        <CardRow>
          <Card background="default">
            <CartTitle>{mealsTotal}</CartTitle>
            <CardText>refeições registradas</CardText>
          </Card>
        </CardRow>

        <CardRow>
          <Card background="green" style={{ marginRight: 6 }}>
            <CartTitle>{mealsWithinTheDiet}</CartTitle>
            <CardText>refeições dentro da dieta</CardText>
          </Card>

          <Card background="red" style={{ marginLeft: 6 }}>
            <CartTitle>{offDietMeals}</CartTitle>
            <CardText>refeições fora da dieta</CardText>
          </Card>
        </CardRow>
      </Content>
    </Container>
  )
}