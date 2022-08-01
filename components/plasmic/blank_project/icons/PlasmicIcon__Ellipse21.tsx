// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse21Icon(props: Ellipse21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 67 67"}
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

      <circle cx={"33.5"} cy={"33.5"} r={"33.5"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse21Icon;
/* prettier-ignore-end */
