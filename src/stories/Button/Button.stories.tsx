import type { Meta, StoryObj } from "@storybook/react";
import { StyleSheet, View } from "react-native";

import React, { FC } from "react";
import { Button } from "../../components/Button";
import { Text } from "react-native-paper";

const meta = {
  title: "Components/Button",
  component: Button,
  decorators: [
    (Story: FC) => (
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
    text: "Press me",
    mode: "contained",
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
