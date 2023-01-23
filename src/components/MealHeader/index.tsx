import { useNavigation } from "@react-navigation/native";
import { BackButton, Container, Icon, Title } from "./styles";

type Props = {
  title: string;
}

export function MealHeader({ title }: Props) {
  const navigation = useNavigation();

  function handleBackButton() {
    navigation.goBack();
  }

  return (
    <Container>
      <Title>{title}</Title>

      <BackButton onPress={handleBackButton}>
        <Icon />
      </BackButton>
    </Container>
  )
}