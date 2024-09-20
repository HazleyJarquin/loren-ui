import type { Meta, StoryObj } from "@storybook/react";
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Checkbox } from "../../components/Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => (
      <View style={styles.centered}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Content: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);

    const handlePress = () => {
      setChecked((prevChecked) => !prevChecked);
      args.onPress();
    };

    return <Checkbox {...args} checked={checked} onPress={handlePress} />;
  },
  args: {
    checked: true,
    onPress: () => {
      console.log("Checkbox pressed!");
    },
    checkColor: "black",

    isDisabled: false,
  },
  argTypes: {
    checked: {
      control: { type: "boolean" },
    },
    isDisabled: {
      control: { type: "boolean" },
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
