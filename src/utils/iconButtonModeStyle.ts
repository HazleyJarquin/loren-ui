import { IModes } from "../interfaces";

export const iconButtonModeStyle: IModes = {
  primary: { backgroundColor: "#2C2C2C" },
  secondary: { borderWidth: 1, borderColor: "#2C2C2C" },
  tertiary: { borderColor: "#2C2C2C" },
};

export const iconButtonModeStyleDisabled: IModes = {
  primary: { backgroundColor: "rgba(169, 169, 169, 0.2)" },
  secondary: { borderWidth: 1, borderColor: "rgba(169, 169, 169, 0.2)" },
  tertiary: { borderColor: "rgba(169, 169, 169, 0.2)" },
};
