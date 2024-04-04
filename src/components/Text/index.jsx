import React from "react";

const sizes = {
  xs: "text-xs font-medium",
  lg: "text-lg font-medium",
  s: "text-sm font-normal",
  "2xl": "text-[25px] font-normal md:text-[23px] sm:text-[21px]",
  xl: "text-xl font-normal",
  md: "text-base font-medium",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
