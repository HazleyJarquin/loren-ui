import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Checkbox } from "../index";
import { View } from "react-native";
import { Text } from "react-native-paper";

jest.mock("@expo/vector-icons", () => {
  return {
    MaterialIcons: () => (
      <View>
        <Text testID="check-icon">Test</Text>
      </View>
    ),
  };
});

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
    const { queryByTestId } = render(
      <Checkbox {...defaultProps} checked={true} />
    );

    expect(queryByTestId("check-icon")).toBeTruthy();
  });

  it("does not display the check icon when not checked", () => {
    const { queryByTestId } = render(
      <Checkbox {...defaultProps} checked={false} />
    );
    expect(queryByTestId("check-icon")).toBeNull();
  });
});
