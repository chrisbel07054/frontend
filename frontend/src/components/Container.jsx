import clsx from "clsx";
import * as React from "react";
import { motion } from "framer-motion";
/* eslint-disable */
const Component = React.forwardRef(
  (
    {
      className,
      id,
      children,
      width = "xl",
      margin = "normal",
      flex,
      wrapperClasses,
      breakpoint,
      spacing = "normal",
    },
    ref
  ) => {
    const breakpointFlex = `${breakpoint}:flex`;

    return (
      <div
        ref={ref}
        className={clsx(wrapperClasses, {
          "": margin === "normal",
          "lg:mx-12": margin === "flat-mobile",
        })}
      >
        <section id={id} className={clsx(className, {})}>
          {children}
        </section>
      </div>
    );
  }
);

const Container = motion(Component);

export default Container;
