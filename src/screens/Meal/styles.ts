import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Circle } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 40px 24px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: 20px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  margin-top: 8px;
  margin-bottom: 24px;
`

export const TextSmall = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Footer = styled.View`
  padding: 0 24px;

  min-height: 134px;
  max-height: 134px;

  background: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Tag = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;

  padding: 8px 16px;
  border-radius: 9999px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`

export const TagText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const TagIcon = styled(Circle).attrs(({ theme }) => ({
  weight: 'fill',
  size: 12
}))`
  margin-right: 8px;
`