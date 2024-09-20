import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { IconButton } from "../index";

describe("IconButton Component", () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    mockOnPress.mockClear();
  });

  it("renders the icon button with the correct icon", () => {
    const { getByTestId } = render(
      <IconButton icon="home" type="AntDesign" onPress={mockOnPress} />
    );
    const iconButton = getByTestId("icon-button");

    expect(iconButton).toBeTruthy();
  });

  it("calls the onPress function when the button is pressed", () => {
    const { getByTestId } = render(
      <IconButton icon="home" type="AntDesign" onPress={mockOnPress} />
    );
    fireEvent.press(getByTestId("icon-button"));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("does not call onPress when the button is disabled", () => {
    const { getByTestId } = render(
      <IconButton
        icon="home"
        type="AntDesign"
        onPress={mockOnPress}
        isDisabled={true}
      />
    );
    fireEvent.press(getByTestId("icon-button"));
    expect(mockOnPress).not.toHaveBeenCalled();
  });
});
