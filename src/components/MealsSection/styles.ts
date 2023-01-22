import styled, { css } from "styled-components/native";

export const MealsSectionTitle = styled.Text`
  margin-top: 32px;
  margin-bottom: 4px;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;