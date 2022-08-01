// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse11Icon(props: Ellipse11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
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
        d={
          "M29.313 14.656c0 8.095-6.562 14.657-14.656 14.657C6.561 29.313 0 22.751 0 14.657 0 6.561 6.562 0 14.656 0c8.095 0 14.657 6.562 14.657 14.656z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse11Icon;
/* prettier-ignore-end */
