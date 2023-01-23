import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { Field } from "@components/Field";
import { MealHeader } from "@components/MealHeader";
import { Button } from "@components/Button";

import { Container, Content, FieldRow, Footer } from "./styles";

export function MealForm() {
  const navigation = useNavigation()
  const { COLORS: { GRAY_5 } } = useTheme();

  function onSubmit() {
    navigation.navigate('feedback');
  }

  return (
    <Container background={GRAY_5}>
      <MealHeader title="Nova refeição" />

      <Content>
        <FieldRow>
          <Field
            label="Nome"
          />
        </FieldRow>

        <FieldRow>
          <Field
            label="Descrição"
            type="description"
          />
        </FieldRow>

        <FieldRow>
          <Field
            label="Data"
            style={{ marginRight: 10 }}
          />
          <Field
            label="Hora"
            style={{ marginLeft: 10 }}
          />
        </FieldRow>

        <FieldRow>
          <Field
            label="Está dentro da dieta?"
            type="toggle"
          />
        </FieldRow>
      </Content>

      <Footer>
        <Button title="Cadastrar refeição" onPress={onSubmit} />
      </Footer>
    </Container>
  )
}