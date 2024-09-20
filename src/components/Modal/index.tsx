import React, { useEffect } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import {
  Portal,
  Modal as PaperModal,
  ModalProps as PaperModalProps,
  Text,
} from "react-native-paper";

import { IconButton } from "../IconButton";

export type ModalProps = PaperModalProps & {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  title?: string;
  onIconClosePress: () => void;
};

export const Modal = ({
  children,
  visible,
  containerStyle,
  title,
  onIconClosePress,
  ...props
}: ModalProps) => {
  const combinedStyle: StyleProp<ViewStyle> = [
    { borderRadius: 8, padding: 20, backgroundColor: "white" },
    containerStyle,
  ];

  return (
    <Portal>
      <PaperModal
        dismissable={false}
        visible={visible}
        contentContainerStyle={combinedStyle}
        {...props}
      >
        <View style={styles.childrenContainer}>
          {title && (
            <View
              style={{
                marginBottom: 20,
                borderBottomWidth: 1,
                borderBottomColor: "#9A9A9A",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Text style={{ marginBottom: 10 }}>{title}</Text>
              <IconButton
                icon={"close"}
                onPress={onIconClosePress}
                mode="tertiary"
                type="MaterialIcons"
                size={20}
                style={{ marginBottom: 10 }}
              />
            </View>
          )}
          {children}
        </View>
      </PaperModal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  childrenContainer: {
    justifyContent: "space-between",
  },
});
