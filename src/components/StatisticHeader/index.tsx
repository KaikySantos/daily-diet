import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { BackButton, Container, Icon, Text, Title } from "./styles";

type Props = {
  percentage: number
}

export function StatisticHeader({ percentage }: Props) {
  const navigation = useNavigation()
  const { COLORS: { GREEN_DARK, RED_DARK } } = useTheme();

  const isNegative = percentage < 50;
  const iconColor = !isNegative ? GREEN_DARK : RED_DARK;

  function handleBackButton() {
    navigation.navigate('home')
  }

  return (
    <Container isNegative={isNegative}>
      <Title>{percentage}%</Title>
      <Text>das refeições dentro da dieta</Text>

      <BackButton onPress={handleBackButton}>
        <Icon color={iconColor} />
      </BackButton>
    </Container>
  )
}