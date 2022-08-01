// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Union3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Union3Icon(props: Union3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 135 57"}
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
          "M16 0C7.163 0 0 7.163 0 16v8.588c0 8.725 6.983 15.819 15.666 15.997l-.793 15.93 14.553-15.927H119c8.837 0 16-7.163 16-16V16c0-8.837-7.163-16-16-16H16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Union3Icon;
/* prettier-ignore-end */
