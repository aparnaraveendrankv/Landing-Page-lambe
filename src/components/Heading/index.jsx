import React from "react";

const sizes = {
  s: "text-[49px] font-semibold md:text-[45px] sm:text-[39px]",
  md: "text-[61px] font-semibold md:text-5xl",
  xs: "text-[39px] font-semibold md:text-[37px] sm:text-[35px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
