// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse12Icon(props: Ellipse12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 37"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"18.39"}
        cy={"18.39"}
        r={"18.39"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse12Icon;
/* prettier-ignore-end */
