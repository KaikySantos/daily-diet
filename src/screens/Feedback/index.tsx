import { useNavigation, useRoute } from "@react-navigation/native";
import { BoldText, Container, Footer, Image, Text, Title } from "./styles";

import { useTheme } from "styled-components/native";

import positiveFeedbackImg from '@assets/positiveFeedback.png'
import negativeFeedbackImg from '@assets/negativeFeedback.png'

type RouteParams = {
  type: 'positive' | 'negative'
}

import { Button } from "@components/Button";

export function Feedback() {
  const navigation = useNavigation()

  const route = useRoute()
  const { type } = route.params as RouteParams

  const { COLORS: { GREEN_DARK, RED_DARK } } = useTheme()

  function handleFooterButton() {
    navigation.navigate('home');
  }

  const title = type === 'positive' ? (
    <Title style={{ color: GREEN_DARK }}>
      Continue assim!
    </Title>
  ) : (
    <Title style={{ color: RED_DARK }}>
      Que pena!
    </Title>
  )

  const text = type === 'positive' ? (
    <Text>
      Você continua <BoldText>dentro da dieta.</BoldText>
      Muito bem!
    </Text>
  ) : (
    <Text>
      Você <BoldText>saiu da dieta</BoldText> dessa vez,
      mas continue se esforçando e não desista!
    </Text>
  )

  const image = type === 'positive' ? positiveFeedbackImg : negativeFeedbackImg;

  return (
    <Container>
      {title}

      {text}

      <Image source={image} />

      <Footer>
        <Button
          title="Ir para a página inicial"
          onPress={handleFooterButton}
        />
      </Footer>
    </Container>
  )
}