import { StylesConfig } from "react-select";
import { EventProp } from "../Form/Form";

export const selectStyle: StylesConfig<EventProp, false> = {
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
