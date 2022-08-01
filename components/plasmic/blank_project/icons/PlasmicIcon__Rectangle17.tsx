// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle17Icon(props: Rectangle17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 144 132"}
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
          "M0 23.436C0 10.493 10.493 0 23.436 0h96.674c12.943 0 23.436 10.493 23.436 23.436v84.224c0 12.943-10.493 23.436-23.436 23.436H23.436C10.493 131.096 0 120.603 0 107.66V23.436z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle17Icon;
/* prettier-ignore-end */
