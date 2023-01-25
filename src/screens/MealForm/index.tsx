import { useState, useEffect, useCallback } from "react";
import { Alert } from "react-native";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { Field } from "@components/Field";
import { MealHeader } from "@components/MealHeader";
import { Button } from "@components/Button";

import { Container, Content, FieldRow, Footer } from "./styles";

import { normalizeDate } from "@utils/masks/normalizeDate";
import { normalizeTime } from "@utils/masks/normalizeTime";
import { AppError } from "@utils/AppError";

import { mealCreate } from "@storage/meal/mealCreate";
import { mealGetById } from "@storage/meal/mealGetById";
import { mealEdit } from "@storage/meal/mealEdit";

type RouteParams = {
  mealId: string | undefined;
}

export function MealForm() {
  const navigation = useNavigation()
  const { COLORS: { GRAY_5 } } = useTheme();

  const route = useRoute();
  const { mealId } = route.params as RouteParams;

  const formType = !mealId ? 'Criar' : 'Editar';

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [mealWithinTheDiet, setMealWithinTheDiet] = useState('');

  useFocusEffect(useCallback(() => {
    if (!mealId) {
      return;
    }

    async function fetchMeal() {
      try {
        const storage = await mealGetById(mealId as string);
  
        setName(storage.name);
        setDescription(storage.description);
        setDate(storage.date);
        setTime(storage.time);
        setMealWithinTheDiet(storage.mealWithinTheDiet);
      } catch (error) {
        console.log(error);
        Alert.alert('Refeições', 'Não foi possível carregar a refeição.');
      }
    }

    fetchMeal()
  }, []))

  useEffect(() => {
    setDate(normalizeDate(date));
  }, [date])
  useEffect(() => {
    setTime(normalizeTime(time));
  }, [time])

  const modalTitle = formType === 'Criar' ? 'Nova refeição' : 'Editar refeição';
  async function onSubmit() {
    if (!name.trim()) {
      return Alert.alert(modalTitle, 'Informe o nome da refeição.')
    }
    if (!description.trim()) {
      return Alert.alert(modalTitle, 'Informe a descrição da refeição.')
    }
    if (!date) {
      return Alert.alert(modalTitle, 'Informe a data da refeição.')
    }
    if (date.length < 10) {
      return Alert.alert(modalTitle, 'Informe uma data válida.')
    }
    if (!time) {
      return Alert.alert(modalTitle, 'Informe o horário da refeição.')
    }
    if (time.length < 5) {
      return Alert.alert(modalTitle, 'Informe um horário válida.')
    }
    if (mealWithinTheDiet === '') {
      return Alert.alert(modalTitle, 'Informe se a refeição está dentro da dieta.')
    }

    const mealData = {
      name,
      description,
      date,
      time,
      mealWithinTheDiet: mealWithinTheDiet as 'yes' | 'not',
    }

    try {
      if (formType === 'Criar') {
        await mealCreate(mealData);
  
        navigation.navigate('feedback', {
          type: mealWithinTheDiet === 'yes' ? 'positive' : 'negative'
        });
      } else {
        await mealEdit({
          id: mealId,
          name,
          date,
          description,
          time,
          mealWithinTheDiet: mealWithinTheDiet as 'yes' | 'not'
        });

        navigation.goBack();
      }
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert(modalTitle, error.message);
      } else {
        Alert.alert(
          modalTitle,
          `Não foi possível ${formType === 'Criar' ? 'criar' : 'editar'} uma nova refeição.`
        );
        console.log(error);
      }
    }
  }

  return (
    <Container background={GRAY_5}>
      <MealHeader
        title={formType === 'Criar' ? 'Nova refeição' : 'Editar refeição'}
      />

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
        <Button
          title={formType === 'Criar' ? 'Cadastrar refeição' : 'Salvar alterações'}
          onPress={onSubmit}
        />
      </Footer>
    </Container>
  )
}