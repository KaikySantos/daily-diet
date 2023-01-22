import theme from "@theme/index";
import { Circle } from "phosphor-react-native";
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

export const ToggleRow = styled.View`
  margin-top: 4px;
  flex-direction: row;
`;

type ToggleButtonProps = {
  type: "yes" | "not";
  selected: boolean;
}

export const ToggleButton = styled.TouchableOpacity<ToggleButtonProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 0px;
  border-radius: 6px;
  background: ${({ theme }) => theme.COLORS.GRAY_6};

  ${({ type, selected }) => css`
    ${selected && type === 'yes' && {
      border: `1px solid ${theme.COLORS.GREEN_DARK}`,
      background: theme.COLORS.GREEN_LIGHT
    }}

    ${selected && type === 'not' && {
      border: `1px solid ${theme.COLORS.RED_DARK}`,
      background: theme.COLORS.RED_LIGHT
    }}
  `}
`;

export const ToggleText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const ToggleIcon = styled(Circle).attrs(({ theme }) => ({
  weight: 'fill',
  size: 12,
}))`
  margin-right: 8px;
`