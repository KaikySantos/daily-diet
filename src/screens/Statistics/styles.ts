import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  background: string;
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background: ${({ background }) => background};
`

export const Content = styled.View`
  background: ${({ theme }) => theme.COLORS.GRAY_7};
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 0px 24px;
`

export const Title = styled.Text`
  text-align: center;

  margin-top: 33px;
  margin-bottom: 23px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

type CardProps = {
  background: "default" | "green" | "red"; 
}

export const Card = styled.View<CardProps>`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  
  ${({ theme, background }) => css`
    ${background === "green" && {
      background: theme.COLORS.GREEN_LIGHT
    }}

    ${background === "red" && {
      background: theme.COLORS.RED_LIGHT
    }}
  `}
`

export const CartTitle = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const CardText = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const CardRow = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
`