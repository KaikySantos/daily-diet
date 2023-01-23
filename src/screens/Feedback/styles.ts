import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 32px;
`;

export const Title = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Text = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const BoldText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Image = styled.Image`
  margin-top: 40px;
  margin-bottom: 32px;
`

export const Footer = styled.View`
  background: red;
  width: 191px;
`