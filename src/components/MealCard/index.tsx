import { TouchableOpacityProps } from "react-native";
import { Container, Divider, Status, Time, Title } from "./styles";

type Props = TouchableOpacityProps & {
  time: string;
  title: string;
  status: 'red' | 'green';
}

export function MealCard({ time, title, status, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Time>{time}</Time>
      
      <Divider />

      <Title>{title}</Title>

      {status === 'red' ? (
        <Status weight="fill" size={14} />
      ) : (
        <Status weight="fill" size={14} />
      )}
    </Container>
  )
}