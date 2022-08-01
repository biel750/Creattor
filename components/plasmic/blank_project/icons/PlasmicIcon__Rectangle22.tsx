// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle22Icon(props: Rectangle22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 131 42"}
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
          "M0 20.792C0 9.31 9.309 0 20.792 0h89.254c11.484 0 20.793 9.309 20.793 20.792 0 11.483-9.309 20.792-20.792 20.792H20.792C9.31 41.584 0 32.275 0 20.792z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle22Icon;
/* prettier-ignore-end */
