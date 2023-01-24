import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { Field } from "@components/Field";
import { MealHeader } from "@components/MealHeader";
import { Button } from "@components/Button";

import { Container, Content, FieldRow, Footer } from "./styles";

import { normalizeDate } from "@utils/masks/normalizeDate";
import { normalizeTime } from "@utils/masks/normalizeTime";
import { AppError } from "@utils/AppError";

import { mealCreate } from "@storage/meal/mealCreate";

export function MealForm() {
  const navigation = useNavigation()
  const { COLORS: { GRAY_5 } } = useTheme();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [mealWithinTheDiet, setMealWithinTheDiet] = useState('');

  useEffect(() => {
    setDate(normalizeDate(date));
  }, [date])
  useEffect(() => {
    setTime(normalizeTime(time));
  }, [time])

  async function onSubmit() {
    if (!name.trim()) {
      return Alert.alert('Nova refeição', 'Informe o nome da refeição.')
    }
    if (!description.trim()) {
      return Alert.alert('Nova refeição', 'Informe a descrição da refeição.')
    }
    if (!date) {
      return Alert.alert('Nova refeição', 'Informe a data da refeição.')
    }
    if (date.length < 10) {
      return Alert.alert('Nova refeição', 'Informe uma data válida.')
    }
    if (!time) {
      return Alert.alert('Nova refeição', 'Informe o horário da refeição.')
    }
    if (time.length < 5) {
      return Alert.alert('Nova refeição', 'Informe um horário válida.')
    }
    if (mealWithinTheDiet === '') {
      return Alert.alert('Nova refeição', 'Informe se a refeição está dentro da dieta.')
    }

    const newMeal = {
      name,
      description,
      date,
      time,
      mealWithinTheDiet: mealWithinTheDiet as 'yes' | 'not',
    }

    try {
      await mealCreate(newMeal);

      navigation.navigate('home');
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova refeição', error.message);
      } else {
        Alert.alert('Nova refeição', 'Não foi possível criar um novo grupo.');
        console.log(error);
      }
    }
  }

  return (
    <Container background={GRAY_5}>
      <MealHeader title="Nova refeição" />

      <Content>
        <FieldRow>
          <Field
            label="Nome"
            value={name}
            onChange={setName}
          />
        </FieldRow>

        <FieldRow>
          <Field
            label="Descrição"
            type="description"
            value={description}
            onChange={setDescription}
          />
        </FieldRow>

        <FieldRow>
          <Field
            label="Data"
            style={{ marginRight: 10 }}
            value={date}
            onChange={setDate}
          />
          <Field
            label="Hora"
            style={{ marginLeft: 10 }}
            value={time}
            onChange={setTime}
          />
        </FieldRow>

        <FieldRow>
          <Field
            label="Está dentro da dieta?"
            type="toggle"
            value={mealWithinTheDiet}
            onChange={setMealWithinTheDiet}
          />
        </FieldRow>
      </Content>

      <Footer>
        <Button title="Cadastrar refeição" onPress={onSubmit} />
      </Footer>
    </Container>
  )
}