import { useTheme } from "styled-components/native";

import { StatisticHeader } from "@components/StatisticHeader";

import { Card, CardRow, CardText, CartTitle, Container, Content, Title } from "./styles";

export function Statistics() {
  const { COLORS: { GREEN_LIGHT, RED_LIGHT } } = useTheme();
  const percentage = 40

  const isNegative = percentage < 50;
  const containerColor = !isNegative ? GREEN_LIGHT : RED_LIGHT;

  return (
    <Container background={containerColor} >
      <StatisticHeader percentage={percentage} />

      <Content>
        <Title>Estatísticas gerais</Title>

        <CardRow>
          <Card background="default">
            <CartTitle>4</CartTitle>
            <CardText>melhor sequência de pratos dentro da dieta</CardText>
          </Card>
        </CardRow>

        <CardRow>
          <Card background="default">
            <CartTitle>109</CartTitle>
            <CardText>refeições registradas</CardText>
          </Card>
        </CardRow>

        <CardRow>
          <Card background="green" style={{ marginRight: 6 }}>
            <CartTitle>32</CartTitle>
            <CardText>refeições dentro da dieta</CardText>
          </Card>

          <Card background="red" style={{ marginLeft: 6 }}>
            <CartTitle>77</CartTitle>
            <CardText>refeições fora da dieta</CardText>
          </Card>
        </CardRow>
      </Content>
    </Container>
  )
}