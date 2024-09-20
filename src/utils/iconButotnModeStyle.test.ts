import {
  iconButtonModeStyle,
  iconButtonModeStyleDisabled,
} from "./iconButtonModeStyle";
import { IModes } from "../interfaces";

describe("Icon Button Styles Functionality", () => {
  const modes: (keyof IModes)[] = ["primary", "secondary", "tertiary"];

  it("should apply the correct button styles for each mode", () => {
    modes.forEach((mode) => {
      const style = iconButtonModeStyle[mode];

      if (mode === "primary") {
        expect(style).toHaveProperty("backgroundColor", "#2C2C2C");
      } else if (mode === "secondary") {
        expect(style).toHaveProperty("borderWidth", 1);
        expect(style).toHaveProperty("borderColor", "#2C2C2C");
      } else if (mode === "tertiary") {
        expect(style).toHaveProperty("borderColor", "#2C2C2C");
      }
    });
  });

  it("should apply the correct disabled button styles for each mode", () => {
    modes.forEach((mode) => {
      const style = iconButtonModeStyleDisabled[mode];

      if (mode === "primary") {
        expect(style).toHaveProperty(
          "backgroundColor",
          "rgba(169, 169, 169, 0.2)"
        );
      } else if (mode === "secondary") {
        expect(style).toHaveProperty("borderWidth", 1);
        expect(style).toHaveProperty("borderColor", "rgba(169, 169, 169, 0.2)");
      } else if (mode === "tertiary") {
        expect(style).toHaveProperty("borderColor", "rgba(169, 169, 169, 0.2)");
      }
    });
  });
});
