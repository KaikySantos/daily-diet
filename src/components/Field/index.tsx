import { Dispatch, SetStateAction, useState } from "react";
import { Text, TextInputProps, ViewProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container, Input, InputProps, Label, ToggleButton, ToggleIcon, ToggleRow, ToggleText } from "./styles";

type Props = ViewProps & {
  label: string;
  type?: 'text' | 'description' | 'date' | 'time' | 'toggle';

  value?: string;
  onChange?: (text: string) => void;
}

export function Field({
  label,
  type = 'text',
  value = '',
  onChange,
  ...rest
}: Props) {
  const { COLORS: { GREEN_DARK, RED_DARK } } = useTheme()

  const inputParams: TextInputProps & InputProps = {}

  if (type === 'description') {
    inputParams.multiline = true;
    inputParams.numberOfLines = 4;
    inputParams.heightAlt = '120px';
    inputParams.textAlignVertical = 'top';
  }

  function handleToggleButton(type: "yes" | 'not') {
    if (onChange) {
      if (value === type) {
        onChange('');
      } else {
        onChange(type);
      }
    }
  }

  return (
    <Container {...rest}>
      <Label>{label}</Label>

      {type !== 'toggle' ? (
        <Input
          {...inputParams}
        
          value={value}
          onChangeText={onChange}
        />
      ) : (
        <ToggleRow>
          <ToggleButton
            style={{ marginRight: 4 }}
            type="yes"
            selected={value === 'yes'}
            onPress={() => handleToggleButton("yes")}
          >
            <ToggleIcon color={GREEN_DARK} />
            <ToggleText>Sim</ToggleText>
          </ToggleButton>
          <ToggleButton
            style={{ marginLeft: 4 }}
            type="not"
            selected={value === 'not'}
            onPress={() => handleToggleButton("not")}
          >
            <ToggleIcon color={RED_DARK} />
            <ToggleText>Não</ToggleText>
          </ToggleButton>
        </ToggleRow>
      )}
    </Container>
  )
}