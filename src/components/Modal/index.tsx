import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import {
  Portal,
  Modal as PaperModal,
  ModalProps as PaperModalProps,
  Text,
  IconButton,
  Icon,
  Button,
} from "react-native-paper";

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
        testID="modal"
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
              <Text style={{ marginBottom: 10 }} testID="modal-title">
                {title}
              </Text>
              <Button onPress={onIconClosePress} testID="close-icon">
                <Icon source="close" size={20} />
              </Button>
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
