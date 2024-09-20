import type { Meta, StoryObj } from "@storybook/react";
import { StyleSheet, View } from "react-native";

import React, { FC } from "react";
import { IconButton } from "../../components/IconButton";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  decorators: [
    (Story: FC) => (
      <View style={styles.centered}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    icon: "home",
    type: "MaterialIcons",
    color: "blue",
    mode: "primary",
    onPress: () => alert("Pressed"),
    isDisabled: false,
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: [
        "AntDesign",
        "Entypo",
        "EvilIcons",
        "Feather",
        "FontAwesome",
        "FontAwesome5",
        "Foundation",
        "Ionicons",
        "MaterialCommunityIcons",
        "MaterialIcons",
        "Octicons",
        "SimpleLineIcons",
        "Zocial",
      ],
    },
    mode: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
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
