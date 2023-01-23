import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Icon, Title } from "./styles";
import { useTheme } from 'styled-components/native';

type Props = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap
  title: string
  type?: "primary" | "secondary"
}

export function Button({ icon, title, type = "primary", ...rest }: Props) {
  const { COLORS: { GRAY_1, WHITE } } = useTheme()

  const iconColor = type === "primary" ? WHITE : GRAY_1;

  return (
    <Container type={type} {...rest}>
      {icon && <Icon color={iconColor} name={icon} />}

      <Title type={type}>
        {title}
      </Title>
    </Container>
  )
}