import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Label = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export type InputProps = {
  heightAlt?: string;
}

export const Input = styled(TextInput)<InputProps>`
  ${({ heightAlt }) => css`
    ${heightAlt ? {
      height: heightAlt
    } : {
      minHeight: '48px',
      maxHeight: '48px'
    }}
  `}

  vertical-align: top;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  padding: 14px;
  margin-bottom: 24px;
`;