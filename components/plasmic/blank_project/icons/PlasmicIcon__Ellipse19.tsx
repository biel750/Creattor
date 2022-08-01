// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse19Icon(props: Ellipse19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 76 76"}
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
        cx={"37.984"}
        cy={"37.984"}
        r={"37.984"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse19Icon;
/* prettier-ignore-end */
