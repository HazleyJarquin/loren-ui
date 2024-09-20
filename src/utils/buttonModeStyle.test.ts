import {
  buttonModeStyle,
  textColorMode,
  buttonModeStyleDisabled,
} from "./buttonModeStyle";

describe("Button Styles Functionality", () => {
  const modes = [
    "text",
    "outlined",
    "contained",
    "elevated",
    "contained-tonal",
  ];

  it("should apply the correct button styles for each mode", () => {
    modes.forEach((mode) => {
      const style = buttonModeStyle[mode];
      if (mode === "contained" || mode === "contained-tonal") {
        expect(style).toHaveProperty("backgroundColor", "#2C2C2C");
      } else {
        expect(style).not.toHaveProperty("backgroundColor");
      }
    });
  });

  it("should apply the correct text color for each mode", () => {
    modes.forEach((mode) => {
      const style = textColorMode[mode];
      if (mode === "contained" || mode === "contained-tonal") {
        expect(style).toHaveProperty("color", "#FFFFFF");
      } else {
        expect(style).toHaveProperty("color", "#2C2C2C");
      }
    });
  });

  it("should apply the correct disabled button styles for each mode", () => {
    modes.forEach((mode) => {
      const style = buttonModeStyleDisabled[mode];

      // Verifica el backgroundColor solo si existe para los modos 'contained' y 'contained-tonal'
      if (mode === "contained" || mode === "contained-tonal") {
        expect(style).toHaveProperty(
          "backgroundColor",
          "rgba(169, 169, 169, 0.2)"
        );
      }
      // Verifica el borderColor para los otros modos
      else if (mode === "outlined" || mode === "elevated") {
        expect(style).toHaveProperty("borderColor", "rgba(169, 169, 169, 0.2)");
      } else {
        // Asegúrate de que los estilos no tengan propiedades cuando no deberían
        expect(style).toEqual({});
      }
    });
  });
});
