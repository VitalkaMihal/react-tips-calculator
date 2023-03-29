import { StylesConfig } from "react-select";

interface selectStyleProps {
  [property: string]: string;
}

export const selectStyle: StylesConfig<selectStyleProps> = {
  control: (baseStyles) => ({
    ...baseStyles,
    height: "68px",
    textAlign: "center",
    border: "none",
    borderRadius: "34px",
    fontSize: "18px",
  }),
  container: (baseStyles) => ({
    ...baseStyles,
    width: "100%",
  }),
  indicatorSeparator: () => ({}),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: "#575555",
    transform: "scale(2)",
  }),
  indicatorsContainer: (baseStyles) => ({
    ...baseStyles,
    position: "absolute",
    right: "30px",
    top: "20px",
  }),
}
