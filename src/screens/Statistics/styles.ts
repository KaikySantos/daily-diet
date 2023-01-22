import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  background: string;
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background: ${({ background }) => background};
`