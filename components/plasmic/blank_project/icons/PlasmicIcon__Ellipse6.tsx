// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse6Icon(props: Ellipse6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 45"}
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
        cx={"22.053"}
        cy={"22.053"}
        r={"22.053"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse6Icon;
/* prettier-ignore-end */
