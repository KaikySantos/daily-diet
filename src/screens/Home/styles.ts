import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

import { UserCircle, ArrowUpRight } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const PercentButton = styled.TouchableOpacity`
  margin-top: 36px;

  align-items: center;

  padding: 20px;
  border-radius: 8px;

  background: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;
export const PercentButtonTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
export const PercentButtonText = styled.Text`
  margin-top: 2px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const MealsTitle = styled.Text`
  margin-top: 40px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const MealsSectionTitle = styled.Text`
  margin-top: 32px;
  margin-bottom: 4px;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const PercentButtonIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
  weight: 'bold'
}))`
  position: absolute;
  top: 13.25px;
  right: 13.25px;
`;
export const UserIcon = styled(UserCircle).attrs(({ theme }) => ({
  size: 40,
  color: theme.COLORS.GRAY_2,
  weight: 'fill',
}))``;