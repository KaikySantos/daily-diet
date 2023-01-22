import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

import { UserCircle } from "phosphor-react-native";

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

export const MealsTitle = styled.Text`
  margin-top: 40px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const UserIcon = styled(UserCircle).attrs(({ theme }) => ({
  size: 40,
  color: theme.COLORS.GRAY_2,
  weight: 'fill',
}))``;