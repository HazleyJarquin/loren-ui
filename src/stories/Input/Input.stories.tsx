import type { Meta, StoryObj } from "@storybook/react";
import { StyleSheet, View } from "react-native";

import React from "react";
import { Input } from "../../components/Input";

const meta = {
  title: "Components/Input",
  component: Input,
  decorators: [
    (Story) => (
      <View style={styles.centered}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    value: "",
    placeholder: "Enter your name",
    onChangeText: (text: string) => console.log(text),
  },
  argTypes: {
    disabled: { control: "boolean" },
    isPassword: { control: "boolean" },
  },
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
