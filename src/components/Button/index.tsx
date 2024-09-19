import { Text, StyleSheet } from "react-native";
import { ButtonProps, Button as PaperButton } from "react-native-paper";
import React from "react";
export interface MyButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const Button = ({
  children,
  onPress,
  contentStyle,
  mode = "contained",
}: MyButtonProps) => {
  const backgroundMode: Record<string, any> = {
    text: {},
    outlined: {},
    contained: { backgroundColor: "#2C2C2C" },
    elevated: {},
    "contained-tonal": { backgroundColor: "#2C2C2C" },
  };
  return (
    <PaperButton
      contentStyle={[contentStyle, { padding: 5 }]}
      children={children}
      onPress={onPress}
      style={backgroundMode[mode] || {}}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "purple",
    borderRadius: 8,
  },
  text: { color: "white" },
});
