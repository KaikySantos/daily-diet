import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

type StatisticHeaderProps = {
  isNegative: boolean
}

export const Container = styled.View<StatisticHeaderProps>`
  align-items: center;

  padding-top: 40px;
  padding-bottom: 34px;
  border-radius: 8px;

  background: ${({ theme, isNegative }) =>
    !isNegative
    ? theme.COLORS.GREEN_LIGHT
    : theme.COLORS.RED_LIGHT
  };
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Text = styled.Text`
  margin-top: 2px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 24px;
`

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  weight: 'bold'
}))``;