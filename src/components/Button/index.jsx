import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-md",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    blue_500: "bg-blue-500 text-white-A700",
    deep_purple_A400: "bg-deep_purple-A400 text-white-A700",
    pink_300: "bg-pink-300",
    gray_50: "bg-gray-50",
  },
};
const sizes = {
  xl: "h-[120px] px-10",
  xs: "h-[24px] px-4 text-xs",
  lg: "h-[61px] px-8 text-lg",
  sm: "h-[32px] px-2.5",
  md: "h-[60px] px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "pink_300",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xl", "xs", "lg", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_500", "deep_purple_A400", "pink_300", "gray_50"]),
};

export { Button };
