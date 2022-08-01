// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse15Icon(props: Ellipse15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 7"}
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
        d={"M6.789 3.394a3.394 3.394 0 11-6.789 0 3.394 3.394 0 016.789 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse15Icon;
/* prettier-ignore-end */
