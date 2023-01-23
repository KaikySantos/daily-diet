import { useNavigation } from "@react-navigation/native";
import { BoldText, Container, Footer, Image, Text, Title } from "./styles";

import positiveFeedbackImg from '@assets/positiveFeedback.png'
import negativeFeedbackImg from '@assets/negativeFeedback.png'

import { Button } from "@components/Button";

export function Feedback() {
  const navigation = useNavigation()

  function handleFooterButton() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <Title>Que pena!</Title>
      <Text>
        Você <BoldText>saiu da dieta</BoldText> dessa vez,
        mas continue se esforçando e não desista!
      </Text>

      <Image source={negativeFeedbackImg} />

      <Footer>
        <Button
          title="Ir para a página inicial"
          onPress={handleFooterButton}
        />
      </Footer>
    </Container>
  )
}