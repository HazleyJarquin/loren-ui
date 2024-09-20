import React from "react";
import { StyleProp, ViewStyle, View } from "react-native";
import { Avatar as PaperAvatar } from "react-native-paper";

export type AvatarProps = {
  variant: "avatarImage" | "avatarIcon" | "avatarText";
  size: number;
  source: { uri: string };
  isBorder?: boolean;
  borderContainerStyle?: StyleProp<ViewStyle>;
  icon?: string;
  avatarText?: string;
  textColor?: string;
  avatarStyle?: StyleProp<ViewStyle>;
};

export const Avatar = ({
  size,
  source,
  variant,
  borderContainerStyle,
  icon,
  avatarText,
  textColor,
  avatarStyle,
  isBorder = false,
}: AvatarProps) => {
  const combinedBorderStyle: StyleProp<ViewStyle> = [
    {
      borderWidth: 2,
      borderColor: "#2C2C2C",
      padding: 5,
      borderRadius: size / 2 + 5,
    },
    borderContainerStyle,
  ];

  return (
    <View style={isBorder ? combinedBorderStyle : {}}>
      {variant === "avatarImage" ? (
        <PaperAvatar.Image size={size} style={avatarStyle} source={source} />
      ) : variant === "avatarIcon" ? (
        <PaperAvatar.Icon size={size} style={avatarStyle} icon={icon ?? ""} />
      ) : (
        <PaperAvatar.Text
          size={size}
          label={avatarText ?? ""}
          color={textColor}
          style={avatarStyle}
        />
      )}
    </View>
  );
};
