import { Container, Content, Footer, Tag, TagIcon, TagText, Text, TextSmall, Title } from "./styles";

import { MealHeader } from "@components/MealHeader";
import { Button } from "@components/Button";

export function Meal() {
  return (
    <Container>
      <MealHeader title="Refeição" />

      <Content>
        <Title>Sanduíche</Title>
        <Text>Sanduíche de pão integral com atum e salada de alface e tomate</Text>
      
        <TextSmall>Data e hora</TextSmall>
        <Text>12/08/2022 às 16:00</Text>

        <Tag>
          <TagIcon />
          <TagText>dentro da dieta</TagText>
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