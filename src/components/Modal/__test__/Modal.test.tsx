import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Modal } from "../index";
import { Text } from "react-native";

describe("Modal Component", () => {
  const mockOnIconClosePress = jest.fn();

  const renderModal = (props = {}) => {
    return render(
      <PaperProvider>
        <Modal
          visible={true}
          onIconClosePress={mockOnIconClosePress}
          {...props}
        >
          <Text>Test content</Text>
        </Modal>
      </PaperProvider>
    );
  };

  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    mockOnIconClosePress.mockClear();
  });

  afterEach(() => {
    jest.clearAllTimers();
    cleanup();
  });

  it("should render modal with title and children", () => {
    const { getByText, getByTestId } = renderModal({ title: "Test Title" });

    expect(getByTestId("modal")).toBeTruthy();
    expect(getByText("Test Title")).toBeTruthy();
    expect(getByText("Test content")).toBeTruthy();
  });

  it("should call onIconClosePress when close button is pressed", async () => {
    const { getByTestId } = renderModal({ title: "Test Title" });

    fireEvent.press(getByTestId("close-icon"));

    await waitFor(() => {
      expect(mockOnIconClosePress).toHaveBeenCalledTimes(1);
    });
  });

  it("should not render modal when visible is false", () => {
    const { queryByTestId } = renderModal({ visible: false });

    expect(queryByTestId("modal")).toBeNull();
  });
});
