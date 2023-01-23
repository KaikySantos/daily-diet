import styled from "styled-components/native"

import { MaterialIcons } from '@expo/vector-icons'

import { TouchableOpacity } from "react-native"

type Props = {
  type: "primary" | "secondary";
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 50px;
  max-height: 50px;

  background-color: ${({ theme, type }) => type === 'primary' ? theme.COLORS.GRAY_2: 'transparent'};

  ${({ theme, type }) => type === 'secondary' && {
    border: `1px solid ${theme.COLORS.GRAY_1}`
  }}

  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text<Props>`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme, type }) => type === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 20
}))`
  margin-right: 10px;
`
