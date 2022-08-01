// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FacebookIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FacebookIcon(props: FacebookIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M2 6a4 4 0 014-4h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6zm4-2a2 2 0 00-2 2v12a2 2 0 002 2h6v-7h-1a1 1 0 010-2h1V9.5A3.5 3.5 0 0115.5 6h.6a1 1 0 110 2h-.6A1.5 1.5 0 0014 9.5V11h2.1a1 1 0 010 2H14v7h4a2 2 0 002-2V6a2 2 0 00-2-2H6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FacebookIcon;
/* prettier-ignore-end */
