// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse14Icon(props: Ellipse14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 35"}
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

      <circle cx={"17.4"} cy={"17.4"} r={"17.4"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse14Icon;
/* prettier-ignore-end */
