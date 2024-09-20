// __tests__/Avatar.test.tsx
import React from "react";
import { render } from "@testing-library/react-native";
import { Avatar } from "../index";

describe("Avatar Component", () => {
  const mockSource = { uri: "https://example.com/image.png" };

  it("renders the avatar with an image", () => {
    const { getByTestId } = render(
      <Avatar
        variant="avatarImage"
        size={50}
        source={mockSource}
        isBorder={false}
      />
    );

    const avatarImage = getByTestId("avatar-image");
    expect(avatarImage).toBeTruthy();
  });

  it("renders the avatar with an icon", () => {
    const { getByTestId } = render(
      <Avatar variant="avatarIcon" size={50} icon="star" isBorder={false} />
    );

    const avatarIcon = getByTestId("avatar-icon");
    expect(avatarIcon).toBeTruthy();
  });

  it("renders the avatar with text", () => {
    const { getByTestId } = render(
      <Avatar
        variant="avatarText"
        size={50}
        avatarText="AB"
        textColor="#fff"
        isBorder={false}
      />
    );

    const avatarText = getByTestId("avatar-text");
    expect(avatarText).toBeTruthy();
  });

  it("applies border style when isBorder is true", () => {
    const { getByTestId } = render(
      <Avatar
        variant="avatarImage"
        size={50}
        source={mockSource}
        isBorder={true}
      />
    );

    const avatarContainer = getByTestId("avatar-container");
    const containerStyle = avatarContainer.props.style;
    expect(containerStyle[0].borderWidth).toBe(2);
    expect(containerStyle[0].borderColor).toBe("#2C2C2C");
  });

  it("applies custom borderContainerStyle", () => {
    const customStyle = { borderColor: "red" };
    const { getByTestId } = render(
      <Avatar
        variant="avatarImage"
        size={50}
        source={mockSource}
        isBorder={true}
        borderContainerStyle={customStyle}
      />
    );

    const avatarContainer = getByTestId("avatar-container");
    const containerStyle = avatarContainer.props.style;
    expect(containerStyle[1].borderColor).toBe("red");
  });
});
