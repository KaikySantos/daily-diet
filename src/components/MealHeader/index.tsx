import { useNavigation } from "@react-navigation/native";
import { BackButton, Container, Icon, Title } from "./styles";

export function MealHeader() {
  const navigation = useNavigation();

  function handleBackButton() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <Title>Nova refeição</Title>

      <BackButton onPress={handleBackButton}>
        <Icon />
      </BackButton>
    </Container>
  )
}