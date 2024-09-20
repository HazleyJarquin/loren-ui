import { Text, StyleSheet } from "react-native";
import { ButtonProps, Button as PaperButton } from "react-native-paper";
import React from "react";
import {
  buttonModeStyle,
  buttonModeStyleDisabled,
  textColorMode,
} from "../../utils/buttonModeStyle";
import { textColorDisabled } from "../../utils/disabledColors";
export interface MyButtonProps extends Omit<ButtonProps, "children"> {
  text: string;
}

export const Button = ({
  text,
  onPress,
  contentStyle,
  mode = "contained",
  disabled,
}: MyButtonProps) => {
  return (
    <PaperButton
      contentStyle={[contentStyle, { padding: 5 }]}
      onPress={onPress}
      style={
        disabled ? buttonModeStyleDisabled[mode] : buttonModeStyle[mode] || {}
      }
      disabled={disabled}
    >
      <Text style={disabled ? textColorDisabled : textColorMode[mode] || {}}>
        {text}
      </Text>
    </PaperButton>
  );
};
