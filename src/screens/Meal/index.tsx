import { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { Container, Content, Footer, Tag, TagIcon, TagText, Text, TextSmall, Title } from "./styles";

import { MealHeader } from "@components/MealHeader";
import { Button } from "@components/Button";

import { mealGetById } from '@storage/meal/mealGetById';
import { MealStorageDTO } from '@storage/meal/mealStorageDTO';

type RouteParams = {
  mealId: string
}

export function Meal() {
  const route = useRoute()
  const { mealId } = route.params as RouteParams

  const { COLORS: { GREEN_DARK, RED_DARK, GREEN_LIGHT, RED_LIGHT } } = useTheme()

  const [meal, setMeal] = useState<MealStorageDTO>({} as MealStorageDTO)

  async function fetchMeals() {
    try {
      const storage = await mealGetById(mealId);

      setMeal(storage);
    } catch (error) {
      console.log(error);
      Alert.alert('Refeições', 'Não foi possível carregar as refeições.');
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeals()
  }, []))

  const backgroundColor = meal.mealWithinTheDiet === 'yes' ? GREEN_LIGHT : RED_LIGHT;

  const tagIconColor = meal.mealWithinTheDiet === 'yes' ? GREEN_DARK : RED_DARK;
  const tagText = meal.mealWithinTheDiet === 'yes' ? 'dentro da dieta' : 'fora da dieta';

  return (
    <Container style={{ backgroundColor }}>
      <MealHeader title="Refeição" />

      <Content>
        <Title>{meal.name}</Title>
        <Text>{meal.description}</Text>
      
        <TextSmall>Data e hora</TextSmall>
        <Text>{meal.date} às {meal.time}</Text>

        <Tag>
          <TagIcon color={tagIconColor} />
          <TagText>{tagText}</TagText>
        </Tag>
      </Content>

      <Footer>
        <Button
          icon="edit"
          title="Editar refeição"
          style={{ marginBottom: 8 }}
        />
        <Button
          icon="delete"
          title="Excluir refeição"
          type="secondary"
        />
      </Footer>
    </Container>
  )
}