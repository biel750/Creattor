// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse10StrokeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse10StrokeIcon(props: Ellipse10StrokeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 17"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 2.447C0 1.096 1.17 0 2.613 0c11.905 0 22.676 4.565 30.42 11.922a2.34 2.34 0 01-.026 3.462c-1.027.949-2.682.938-3.695-.025-6.802-6.462-16.25-10.464-26.7-10.464C1.17 4.895 0 3.799 0 2.447z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse10StrokeIcon;
/* prettier-ignore-end */
