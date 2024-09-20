import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "../index";

describe("Button Component", () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    mockOnPress.mockClear();
  });

  it("renders the button with the correct text", () => {
    const { getByText } = render(
      <Button text="Click Me" onPress={mockOnPress} />
    );
    expect(getByText("Click Me")).toBeTruthy();
  });

  it("calls the onPress function when the button is pressed", () => {
    const { getByText } = render(
      <Button text="Click Me" onPress={mockOnPress} />
    );
    fireEvent.press(getByText("Click Me"));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("does not call onPress when the button is disabled", () => {
    const { getByText } = render(
      <Button text="Disabled Button" onPress={mockOnPress} disabled={true} />
    );
    fireEvent.press(getByText("Disabled Button"));
    expect(mockOnPress).not.toHaveBeenCalled();
  });
});
