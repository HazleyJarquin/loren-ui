import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Checkbox } from "../index";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import {
  backgroundColorDisabled,
  textColorDisabled,
} from "../../../utils/disabledColors";

interface MaterialIconsProps {
  name: string;
  size?: number;
  color?: string;
  testID?: string;
}
jest.mock("@expo/vector-icons", () => ({
  MaterialIcons: ({ name, size, color, testID }: MaterialIconsProps) => (
    <View testID={testID}>
      <Text style={{ color }} testID="icon-text">
        {name}
      </Text>
    </View>
  ),
}));

const mockOnPress = jest.fn();

const defaultProps = {
  checked: false,
  onPress: mockOnPress,
  checkColor: "green",
  borderColor: "black",
  isDisabled: false,
};

describe("Checkbox Component", () => {
  beforeEach(() => {
    mockOnPress.mockClear();
  });

  it("renders without crashing", () => {
    const { getByTestId } = render(<Checkbox {...defaultProps} />);
    expect(getByTestId("checkbox")).toBeTruthy();
  });

  it("calls the onPress function when pressed", () => {
    const { getByTestId } = render(<Checkbox {...defaultProps} />);
    fireEvent.press(getByTestId("checkbox"));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("does not call onPress when disabled", () => {
    const { getByTestId } = render(
      <Checkbox {...defaultProps} isDisabled={true} />
    );
    fireEvent.press(getByTestId("checkbox"));
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it("displays the check icon when checked", () => {
    const { getAllByTestId } = render(
      <Checkbox {...defaultProps} checked={true} />
    );
    const checkIcons = getAllByTestId("check-icon");
    expect(checkIcons.length).toBe(1);
    expect(checkIcons[0]).toBeTruthy();
  });

  it("applies the textColorDisabled when the checkbox is disabled and checked", () => {
    const { getAllByTestId } = render(
      <Checkbox {...defaultProps} checked={true} isDisabled={true} />
    );
    const checkIcons = getAllByTestId("check-icon");
    expect(checkIcons.length).toBe(1);
    const checkIcon = checkIcons[0];

    const iconText = checkIcon.findByProps({ testID: "icon-text" });

    expect(StyleSheet.flatten(iconText.props.style).color).toBe(
      textColorDisabled
    );
  });

  it("applies the correct borderColor when disabled", () => {
    const { getByTestId } = render(
      <Checkbox {...defaultProps} isDisabled={true} />
    );
    const checkbox = getByTestId("checkbox");
    const flattenedStyles = StyleSheet.flatten(checkbox.props.style);

    expect(flattenedStyles.borderColor).toBe(backgroundColorDisabled);
  });

  it("applies the correct checkColor when not disabled", () => {
    const { getAllByTestId } = render(
      <Checkbox {...defaultProps} checked={true} isDisabled={false} />
    );
    const checkIcons = getAllByTestId("check-icon");
    expect(checkIcons.length).toBe(1);
    const checkIcon = checkIcons[0];

    const iconText = checkIcon.findByProps({ testID: "icon-text" });

    expect(StyleSheet.flatten(iconText.props.style).color).toBe(
      defaultProps.checkColor
    );
  });

  it("does not display the check icon when not checked", () => {
    const { queryByTestId } = render(
      <Checkbox {...defaultProps} checked={false} />
    );
    expect(queryByTestId("check-icon")).toBeNull();
  });
});
