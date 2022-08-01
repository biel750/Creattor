// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Polygon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Polygon2Icon(props: Polygon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 51 33"}
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
        d={"M25.474 0l24.658 32.854H.815L25.474 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Polygon2Icon;
/* prettier-ignore-end */
