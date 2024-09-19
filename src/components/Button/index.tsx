import { Text, StyleSheet } from "react-native";
import { ButtonProps, Button as PaperButton } from "react-native-paper";
import React from "react";
export interface MyButtonProps extends ButtonProps {
  onPress: () => void;
  text: string;
}

export const Button = ({ onPress, text }: MyButtonProps) => {
  return (
    <PaperButton style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </PaperButton>
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
