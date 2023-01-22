import { ArrowUpRight } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type PercentButtonProps = {
  isNegative: boolean
}

export const Container = styled.TouchableOpacity<PercentButtonProps>`
  margin-top: 36px;

  align-items: center;

  padding: 20px;
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

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  weight: 'bold'
}))`
  position: absolute;
  top: 13.25px;
  right: 13.25px;
`;