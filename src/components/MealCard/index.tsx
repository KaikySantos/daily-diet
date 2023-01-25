import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Divider, Status, Time, Title } from "./styles";

type Props = TouchableOpacityProps & {
  time: string;
  title: string;
  status: 'red' | 'green';
}

export function MealCard({ time, title, status, ...rest }: Props) {
  const { COLORS: { RED_MID, GREEN_MID } } = useTheme()

  return (
    <Container {...rest}>
      <Time>{time}</Time>
      
      <Divider />

      <Title>{title}</Title>

      {status === 'red' ? (
        <Status color={RED_MID} />
      ) : (
        <Status color={GREEN_MID} />
      )}
    </Container>
  )
}