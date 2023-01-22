import { MealHeader } from "@components/MealHeader";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

export function MealForm() {
  const { COLORS: { GRAY_5 } } = useTheme();

  return (
    <Container background={GRAY_5}>
      <MealHeader />
    </Container>
  )
}