import { TextInputProps, ViewProps } from "react-native";

import { Container, Input, InputProps, Label } from "./styles";

type Props = ViewProps & {
  label: string;
  type?: 'text' | 'description' | 'date' | 'time';
}

export function Field({ label, type = 'text', ...rest }: Props) {
  const inputParams: TextInputProps & InputProps = {}

  if (type === 'description') {
    inputParams.multiline = true;
    inputParams.numberOfLines = 4;
    inputParams.heightAlt = '120px';
    inputParams.textAlignVertical = 'top';
  }

  return (
    <Container {...rest}>
      <Label>{label}</Label>
      <Input {...inputParams} />
    </Container>
  )
}