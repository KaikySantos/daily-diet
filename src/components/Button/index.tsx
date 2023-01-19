import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap
  title: string
}

export function Button({ icon, title, ...rest }: Props) {
  return (
    <Container {...rest}>
      {icon && <Icon name={icon} />}

      <Title>
        {title}
      </Title>
    </Container>
  )
}