import { useTheme } from "styled-components/native";

import { Field } from "@components/Field";
import { MealHeader } from "@components/MealHeader";
import { Button } from "@components/Button";

import { Container, Content, FieldRow, Footer } from "./styles";

export function MealForm() {
  const { COLORS: { GRAY_5 } } = useTheme();

  return (
    <Container background={GRAY_5}>
      <MealHeader />

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
        <Button title="Cadastrar refeição" />
      </Footer>
    </Container>
  )
}