export const buttonModeStyle: Record<string, any> = {
  text: {},
  outlined: { borderWidth: 1, borderColor: "#2C2C2C" },
  contained: { backgroundColor: "#2C2C2C" },
  elevated: { borderWidth: 1, borderColor: "#2C2C2C", borderStyle: "dashed" },
  "contained-tonal": { backgroundColor: "#2C2C2C" },
};

export const textColorMode: Record<string, any> = {
  text: { color: "#2C2C2C" },
  outlined: { color: "#2C2C2C" },
  contained: { color: "#FFFFFF" },
  elevated: { color: "#2C2C2C" },
  "contained-tonal": { color: "#FFFFFF" },
};

export const buttonModeStyleDisabled: Record<string, any> = {
  text: {},
  outlined: { borderWidth: 1, borderColor: "rgba(169, 169, 169, 0.2)" },
  contained: { backgroundColor: "rgba(169, 169, 169, 0.2)" },
  elevated: {
    borderWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.2)",
    borderStyle: "dashed",
  },
  "contained-tonal": { backgroundColor: "rgba(169, 169, 169, 0.2)" },
};
