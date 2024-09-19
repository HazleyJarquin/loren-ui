import type { Meta, StoryObj } from "@storybook/react";
import { StyleSheet, View } from "react-native";

import React from "react";
import { Button } from "../../components/Button";
import { Text } from "react-native-paper";

const meta = {
  title: "Components/Button",
  component: Button,
  decorators: [
    (Story) => (
      <View style={styles.centered}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    onPress: () => alert("Pressed"),
    children: <Text style={{ color: "white" }}>Press me!</Text>,
  },
  argTypes: {
    disabled: { control: "boolean" },
    mode: {
      control: { type: "select" },
      options: ["text", "outlined", "contained", "elevated", "contained-tonal"],
    },
  },
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
