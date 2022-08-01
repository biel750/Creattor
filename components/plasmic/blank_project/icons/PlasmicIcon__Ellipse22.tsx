// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse22Icon(props: Ellipse22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 71 71"}
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

      <circle cx={"35.5"} cy={"35.5"} r={"35.5"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse22Icon;
/* prettier-ignore-end */
