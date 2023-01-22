import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 24px 0px;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 24px;
  left: 27px;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  weight: 'bold'
}))``;