import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Keyboard } from "react-native";
import { Text, TextInput, TextInputProps } from "react-native-paper";

export interface InputProps extends Omit<TextInputProps, "mode"> {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  label?: string;
  isPassword?: boolean;
}

export const Input = ({
  onChangeText,
  placeholder,
  value,
  keyboardType,
  label,
  isPassword = false,
  disabled = false,
}: InputProps) => {
  const [secureText, setSecureText] = useState(isPassword);

  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>
          {label} <Text style={{ color: "red" }}>*</Text>
        </Text>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          disabled={disabled}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#aaa"
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
          underlineColor="transparent"
          theme={{ colors: { primary: "transparent" } }}
          secureTextEntry={secureText}
          right={
            isPassword ? (
              <TextInput.Icon
                disabled={disabled}
                onPress={() => {
                  Keyboard.dismiss();
                  setSecureText(!secureText);
                }}
                icon={secureText ? "eye-off" : "eye"}
              />
            ) : null
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  input: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: 10,
  },
  icon: {
    fontSize: 16,
    color: "#007BFF",
  },
});
