import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  backgroundColorDisabled,
  textColorDisabled,
} from "../../utils/disabledColors";

export interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
  checkColor: string;
  borderColor?: string;
  isDisabled?: boolean;
}

export const Checkbox = ({
  checked,
  onPress,
  checkColor,
  borderColor = "black",
  isDisabled,
}: CheckboxProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.checkboxBase,
        {
          borderColor: isDisabled ? backgroundColorDisabled : borderColor,
        },
      ]}
      disabled={isDisabled}
      testID="checkbox"
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled }}
    >
      {checked && (
        <MaterialIcons
          name="check"
          size={18}
          color={isDisabled ? textColorDisabled : checkColor}
          testID="check-icon"
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
