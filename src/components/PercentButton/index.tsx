import { TouchableOpacityProps } from "react-native";

import { useTheme } from "styled-components/native";
import { Container, Icon, Text, Title } from "./styles";

type Props =  TouchableOpacityProps & {
  percentage: number
}

export function PercentButton({ percentage, ...rest }: Props) {
  const { COLORS: { GREEN_DARK, RED_DARK } } = useTheme();

  const isNegative = percentage < 50;
  const iconColor = !isNegative ? GREEN_DARK : RED_DARK;

  return (
    <Container isNegative={isNegative} {...rest}>
      <Title>{percentage}%</Title>
      <Text>das refeições dentro da dieta</Text>
      <Icon color={iconColor} />
    </Container>
  )
}