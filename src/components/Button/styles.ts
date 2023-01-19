import styled from "styled-components/native"

import { MaterialIcons } from '@expo/vector-icons'

import { TouchableOpacity } from "react-native"

export const Container = styled(TouchableOpacity)`
  flex: 1;

  min-height: 50px;
  max-height: 50px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_2};

  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.WHITE
}))`
  margin-right: 10px;
`
