import React from "react";
import { render } from "@testing-library/react-native";
import { Avatar } from "../index";

describe("Avatar Component", () => {
  const mockSource = { uri: "https://example.com/image.png" };

  it("renders the avatar with an image", () => {
    const { getByTestId } = render(
      <Avatar variant="avatarImage" size={50} source={mockSource} />
    );
    const avatarImage = getByTestId("avatar-image");
    expect(avatarImage).toBeTruthy();
  });

  it("renders the avatar with an icon", () => {
    const { getByTestId } = render(
      <Avatar variant="avatarIcon" size={50} icon="account" />
    );
    const avatarIcon = getByTestId("avatar-icon");
    expect(avatarIcon).toBeTruthy();
  });

  it("renders the avatar with text", () => {
    const { getByTestId } = render(
      <Avatar variant="avatarText" size={50} avatarText="John Doe" />
    );
    const avatarText = getByTestId("avatar-text");
    expect(avatarText).toBeTruthy();
  });

  it("renders correctly when no source is provided for image variant", () => {
    const { getByTestId } = render(<Avatar variant="avatarImage" size={50} />);
    const avatarImage = getByTestId("avatar-image");
    expect(avatarImage).toBeTruthy();
  });

  it("renders correctly when no icon is provided for icon variant", () => {
    const { getByTestId } = render(<Avatar variant="avatarIcon" size={50} />);
    const avatarIcon = getByTestId("avatar-icon");
    expect(avatarIcon).toBeTruthy();
  });

  it("renders correctly when no avatarText is provided for text variant", () => {
    const { getByText } = render(
      <Avatar variant="avatarText" size={50} isBorder={false} />
    );
    expect(getByText("NA")).toBeTruthy(); // Verifica que el texto "NA" esté presente
  });

  it("applies border style when isBorder is true", () => {
    const { getByTestId } = render(
      <Avatar variant="avatarText" size={50} isBorder={true} />
    );
    const avatarContainer = getByTestId("avatar-container");

    // Verifica que el estilo contenga borderWidth
    expect(avatarContainer.props.style).toMatchObject({
      borderWidth: 2,
    });
  });

  it("applies custom borderContainerStyle", () => {
    const customStyle = { backgroundColor: "red" };
    const { getByTestId } = render(
      <Avatar
        variant="avatarText"
        size={50}
        borderContainerStyle={customStyle}
      />
    );
    const avatarContainer = getByTestId("avatar-container");

    // Verifica que el estilo contenga el estilo personalizado
    expect(avatarContainer.props.style).toEqual(
      expect.objectContaining(customStyle)
    );
  });

  it("does not apply border style when isBorder is false", () => {
    const { getByTestId } = render(
      <Avatar variant="avatarText" size={50} isBorder={false} />
    );
    const avatarContainer = getByTestId("avatar-container");

    // Verifica que el estilo no contenga borderWidth
    expect(avatarContainer.props.style).not.toEqual(
      expect.arrayContaining([expect.objectContaining({ borderWidth: 2 })])
    );
  });
});
