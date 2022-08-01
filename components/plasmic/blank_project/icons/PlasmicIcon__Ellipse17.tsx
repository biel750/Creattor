// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse17Icon(props: Ellipse17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 36"}
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
        cx={"17.543"}
        cy={"17.543"}
        r={"17.543"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse17Icon;
/* prettier-ignore-end */
