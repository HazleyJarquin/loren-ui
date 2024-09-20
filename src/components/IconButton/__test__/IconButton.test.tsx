import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { IconButton } from "../index";
import { textColorDisabled } from "../../../utils/disabledColors";
import { Text } from "react-native";

interface MockIconProps {
  testID?: string;
  name: string;
  size: number;
  color: string;
}

jest.mock("@expo/vector-icons", () => {
  return {
    AntDesign: (props: MockIconProps) => <MockIcon {...props} />,
    Entypo: (props: MockIconProps) => <MockIcon {...props} />,
    EvilIcons: (props: MockIconProps) => <MockIcon {...props} />,
    Feather: (props: MockIconProps) => <MockIcon {...props} />,
    FontAwesome: (props: MockIconProps) => <MockIcon {...props} />,
    FontAwesome5: (props: MockIconProps) => <MockIcon {...props} />,
    Foundation: (props: MockIconProps) => <MockIcon {...props} />,
    Ionicons: (props: MockIconProps) => <MockIcon {...props} />,
    MaterialCommunityIcons: (props: MockIconProps) => <MockIcon {...props} />,
    MaterialIcons: (props: MockIconProps) => <MockIcon {...props} />,
    Octicons: (props: MockIconProps) => <MockIcon {...props} />,
    SimpleLineIcons: (props: MockIconProps) => <MockIcon {...props} />,
    Zocial: (props: MockIconProps) => <MockIcon {...props} />,
  };
});

const MockIcon = (props: MockIconProps) => <Text testID="icon" {...props} />;

describe("IconButton Component", () => {
  const mockOnPress = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    const { getByTestId } = render(
      <IconButton icon="check" type="AntDesign" />
    );
    expect(getByTestId("icon-button")).toBeTruthy();
  });

  it("calls the onPress function when pressed", () => {
    const { getByTestId } = render(
      <IconButton icon="check" type="AntDesign" onPress={mockOnPress} />
    );
    fireEvent.press(getByTestId("icon-button"));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("does not call onPress when disabled", () => {
    const { getByTestId } = render(
      <IconButton
        icon="check"
        type="AntDesign"
        onPress={mockOnPress}
        isDisabled={true}
      />
    );
    fireEvent.press(getByTestId("icon-button"));
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it("applies the correct color when disabled", () => {
    const { getByTestId } = render(
      <IconButton icon="check" type="AntDesign" isDisabled={true} />
    );
    const icon = getByTestId("icon");
    expect(icon.props.color).toBe(textColorDisabled);
  });

  it("applies the correct color when not disabled", () => {
    const { getByTestId } = render(
      <IconButton icon="check" type="AntDesign" color="blue" />
    );
    const icon = getByTestId("icon");
    expect(icon.props.color).toBe("blue");
  });

  it("renders with default size when no size prop is provided", () => {
    const { getByTestId } = render(
      <IconButton icon="check" type="AntDesign" />
    );
    const icon = getByTestId("icon");
    expect(icon.props.size).toBe(24);
  });

  it("renders with provided size", () => {
    const { getByTestId } = render(
      <IconButton icon="check" type="AntDesign" size={30} />
    );
    const icon = getByTestId("icon");
    expect(icon.props.size).toBe(30);
  });
});
