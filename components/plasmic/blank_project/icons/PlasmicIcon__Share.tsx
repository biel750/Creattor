// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShareIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShareIcon(props: ShareIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 29"}
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
          "M15.082 28.767c8.317.038 15.055-6.356 15.05-14.281C30.124 6.56 23.377.106 15.06.068 6.743.03.005 6.425.01 14.35c.007 7.925 6.754 14.38 15.072 14.417z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShareIcon;
/* prettier-ignore-end */
