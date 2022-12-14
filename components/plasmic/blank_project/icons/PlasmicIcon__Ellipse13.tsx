// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse13Icon(props: Ellipse13IconProps) {
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
        cx={"17.683"}
        cy={"17.683"}
        r={"17.683"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse13Icon;
/* prettier-ignore-end */
