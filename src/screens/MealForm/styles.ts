import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  background: string;
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ background }) => background};
`;

export const Content = styled.View`
  flex: 1;
  padding: 40px 24px;
  background: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const FieldRow = styled.View`
  flex-direction: row;
`;

export const Footer = styled.View`
  padding: 0 24px;

  min-height: 74px;
  max-height: 74px;

  background: ${({ theme }) => theme.COLORS.GRAY_7};
`;