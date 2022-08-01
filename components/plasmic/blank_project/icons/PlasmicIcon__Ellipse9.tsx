// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse9Icon(props: Ellipse9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 78 78"}
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
        opacity={".23"}
        d={
          "M77.224 38.612c0 21.325-17.287 38.612-38.612 38.612C17.287 77.224 0 59.937 0 38.612 0 17.287 17.287 0 38.612 0c21.325 0 38.612 17.287 38.612 38.612z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse9Icon;
/* prettier-ignore-end */
