import { Text, StyleSheet } from "react-native";
import { ButtonProps, Button as PaperButton } from "react-native-paper";
import React from "react";
export interface MyButtonProps extends Omit<ButtonProps, "children"> {
  text: string;
}

export const Button = ({
  text,
  onPress,
  contentStyle,
  mode = "contained",
}: MyButtonProps) => {
  const buttonModeStyle: Record<string, any> = {
    text: {},
    outlined: { borderWidth: 1, borderColor: "#2C2C2C" },
    contained: { backgroundColor: "#2C2C2C" },
    elevated: { borderWidth: 1, borderColor: "#2C2C2C", borderStyle: "dashed" },
    "contained-tonal": { backgroundColor: "#2C2C2C" },
  };

  const textColorMode: Record<string, any> = {
    text: { color: "#2C2C2C" },
    outlined: { color: "#2C2C2C" },
    contained: { color: "#FFFFFF" },
    elevated: { color: "#2C2C2C" },
    "contained-tonal": { color: "#FFFFFF" },
  };

  return (
    <PaperButton
      contentStyle={[contentStyle, { padding: 5 }]}
      onPress={onPress}
      style={buttonModeStyle[mode] || {}}
    >
      <Text style={textColorMode[mode] || {}}>{text}</Text>
    </PaperButton>
  );
};
