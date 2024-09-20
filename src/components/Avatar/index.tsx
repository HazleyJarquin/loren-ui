import React from "react";
import { StyleProp, ViewStyle, View } from "react-native";
import { Avatar as PaperAvatar } from "react-native-paper";

export type AvatarProps = {
  variant: "avatarImage" | "avatarIcon" | "avatarText";
  size: number;
  source?: { uri: string };
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
    <View testID="avatar-container" style={isBorder ? combinedBorderStyle : {}}>
      {variant === "avatarImage" ? (
        <PaperAvatar.Image
          testID="avatar-image"
          size={size}
          style={avatarStyle}
          source={source ?? { uri: "" }}
        />
      ) : variant === "avatarIcon" ? (
        <PaperAvatar.Icon
          testID="avatar-icon"
          size={size}
          style={avatarStyle}
          icon={icon ?? ""}
        />
      ) : (
        <PaperAvatar.Text
          testID="avatar-text"
          size={size}
          label={avatarText ?? ""}
          color={textColor}
          style={avatarStyle}
        />
      )}
    </View>
  );
};
