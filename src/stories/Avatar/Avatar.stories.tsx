import type { Meta, StoryObj } from "@storybook/react";
import { StyleSheet, View } from "react-native";
import React from "react";
import { Avatar } from "../../components/Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  decorators: [
    (Story) => (
      <View style={styles.centered}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    size: 100,
    source: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Dh-hCRQx8d2VZzrmMMLcpUhAh53KlS1s5A&s",
    },
    variant: "avatarImage",
    avatarStyle: { backgroundColor: "blue" },
    textColor: "black",
    borderContainerStyle: { borderColor: "blue" },
    isBorder: true,
    icon: "account",
    avatarText: "HG",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["avatarImage", "avatarIcon", "avatarText"],
    },
    isBorder: {
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
