// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse7Icon(props: Ellipse7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 47 47"}
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

      <path
        d={
          "M46.007 23.004c0 12.704-10.299 23.003-23.003 23.003C10.299 46.007 0 35.708 0 23.004 0 10.299 10.3 0 23.004 0s23.003 10.3 23.003 23.004z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse7Icon;
/* prettier-ignore-end */
