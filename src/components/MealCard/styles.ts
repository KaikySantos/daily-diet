import styled, { css } from "styled-components/native";

import { Circle } from "phosphor-react-native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  padding: 16.5px 12px;
  border-radius: 6px;

  margin-top: 8px;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_5};
  `}
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
  margin: 0px 12px;
`;

export const Title = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Status = styled(Circle).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_MID
}))``;