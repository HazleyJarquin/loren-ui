import React from "react";
import { render, fireEvent, cleanup, act } from "@testing-library/react-native";
import { Input } from "../index";

describe("Input Component", () => {
  const mockOnChangeText = jest.fn();

  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    mockOnChangeText.mockClear();
  });

  afterEach(() => {
    jest.clearAllTimers();
    cleanup();
  });

  it("renders the input with the correct placeholder", () => {
    const { getByPlaceholderText } = render(
      <Input
        value=""
        onChangeText={mockOnChangeText}
        placeholder="Enter text"
      />
    );
    expect(getByPlaceholderText("Enter text")).toBeTruthy();
  });

  it("renders the label with the correct text", () => {
    const { getByTestId } = render(
      <Input
        value=""
        onChangeText={mockOnChangeText}
        placeholder="Enter text"
        label="My Label"
      />
    );
    expect(getByTestId("input-label").props.children).toContain("My Label");
  });

  it("calls onChangeText when the input text changes", () => {
    const { getByTestId } = render(
      <Input
        value=""
        onChangeText={mockOnChangeText}
        placeholder="Enter text"
      />
    );
    act(() => {
      fireEvent.changeText(getByTestId("input"), "New text");
    });
    expect(mockOnChangeText).toHaveBeenCalledWith("New text");
  });

  it("toggles password visibility when the eye icon is pressed", () => {
    const { getByTestId, getByPlaceholderText } = render(
      <Input
        value="password"
        onChangeText={mockOnChangeText}
        placeholder="Enter password"
        isPassword={true}
      />
    );

    const eyeIcon = getByTestId("toggle-password-visibility");
    const inputField = getByPlaceholderText("Enter password");

    expect(inputField.props.secureTextEntry).toBe(true);

    act(() => {
      fireEvent.press(eyeIcon);
    });

    expect(inputField.props.secureTextEntry).toBe(false);

    act(() => {
      fireEvent.press(eyeIcon);
    });

    expect(inputField.props.secureTextEntry).toBe(true);
  });

  it("does not call onChangeText when input is disabled", () => {
    const { getByTestId } = render(
      <Input
        value=""
        onChangeText={mockOnChangeText}
        placeholder="Enter text"
        disabled={true}
      />
    );
    act(() => {
      fireEvent.changeText(getByTestId("input"), "New text");
    });
    expect(mockOnChangeText).not.toHaveBeenCalled();
  });
});
