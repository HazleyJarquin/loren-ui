import type { Meta, StoryObj } from "@storybook/react";
import { StyleSheet, View } from "react-native";
import React from "react";
import { ModalExample } from "./ModalExample";

const meta = {
  title: "Components/Modal",
  component: ModalExample,
  decorators: [
    (Story) => (
      <View style={styles.centered}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ModalExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    title: "Modal Title",
  },
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
