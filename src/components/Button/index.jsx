import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[12px]" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-bs text-black-900",
    red_A200: "bg-red-A200 text-white-A700",
    gray_200_aa: "bg-gray-200_aa text-gray-500_03",
    white_A700_33: "bg-white-A700_33 text-blue_gray-900_01",
    green_400: "bg-green-400 text-white-A700",
  },
  gradient: {
    red_A200_deep_orange_900_9b: "bg-gradient  shadow-bs1 text-white-A700",
  },
  outline: {
    black_900: "border border-black-900 border-solid text-gray-700_01",
  },
};
const sizes = {
  xs: "py-px",
  sm: "p-1",
  md: "p-[7px]",
  lg: "p-3",
  xl: "p-[21px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "gradient", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "red_A200",
    "gray_200_aa",
    "white_A700_33",
    "green_400",
    "red_A200_deep_orange_900_9b",
    "black_900",
  ]),
};

export { Button };
