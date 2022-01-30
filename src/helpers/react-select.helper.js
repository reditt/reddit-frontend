export const colourStyles = {
  control: (base, state) => ({
    ...base,
    border: " 1px solid rgba(243, 244, 246, 1)",
    padding: "0px",
    fontSize: "12px",
    fontWeight: "500",
    outline: "none",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    // const color = chroma(data.color);
    console.log({ data, isDisabled, isFocused, isSelected });
    return {
      ...styles,
      backgroundColor: isFocused ? "rgba(243, 244, 246, 1)" : null,
      color: "#333333",
      fontSize: "12px",
      padding: "5px 10px",
      fontWeight: "500",
      outline: "none",
      border: "none",
    };
  },
};
