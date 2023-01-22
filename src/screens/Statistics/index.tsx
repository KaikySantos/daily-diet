import { useTheme } from "styled-components/native";

import { StatisticHeader } from "@components/StatisticHeader";

import { Container } from "./styles";

export function Statistics() {
  const { COLORS: { GREEN_LIGHT, RED_LIGHT } } = useTheme();
  const percentage = 40

  const isNegative = percentage < 50;
  const containerColor = !isNegative ? GREEN_LIGHT : RED_LIGHT;

  return (
    <Container background={containerColor} >
      <StatisticHeader percentage={percentage} />
    </Container>
  )
}