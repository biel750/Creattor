// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle18Icon(props: Rectangle18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 122 26"}
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
          "M0 12.817C0 5.738 5.738 0 12.817 0h95.941c7.079 0 12.817 5.738 12.817 12.817 0 7.078-5.738 12.816-12.817 12.816H12.817C5.738 25.633 0 19.895 0 12.817z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle18Icon;
/* prettier-ignore-end */
