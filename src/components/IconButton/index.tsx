import React from "react";
import { ViewStyle, TextStyle, TouchableOpacity } from "react-native";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";
import {
  iconButtonModeStyle,
  iconButtonModeStyleDisabled,
} from "../../utils/iconButtonModeStyle";
import { textColorDisabled } from "../../utils/disabledColors";

type IconTypes =
  | "AntDesign"
  | "Entypo"
  | "EvilIcons"
  | "Feather"
  | "FontAwesome"
  | "FontAwesome5"
  | "Foundation"
  | "Ionicons"
  | "MaterialCommunityIcons"
  | "MaterialIcons"
  | "Octicons"
  | "SimpleLineIcons"
  | "Zocial";

export interface IconProps {
  icon: string;
  type: IconTypes;
  size?: number;
  color?: string;
  style?: ViewStyle | TextStyle;
  onPress?: () => void;
  mode?: "primary" | "secondary" | "tertiary";
  isDisabled?: boolean;
}

const iconLibraries = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
};

export const IconButton = ({
  icon,
  type,
  size = 24,
  color = "black",
  style,
  onPress,
  mode = "primary",
  isDisabled = false,
}: IconProps) => {
  const IconComponent = iconLibraries[type];

  if (!IconComponent) {
    console.error(`El tipo de icono "${type}" no es válido.`);
    return null;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={[
        isDisabled
          ? iconButtonModeStyleDisabled[mode]
          : iconButtonModeStyle[mode],
        style,
        { padding: 5, borderRadius: 8 },
      ]}
    >
      <IconComponent
        name={icon}
        size={size}
        color={isDisabled ? textColorDisabled : color}
      />
    </TouchableOpacity>
  );
};
