// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle20Icon(props: Rectangle20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 119 40"}
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
          "M0 19.513C0 8.736 8.736 0 19.513 0h79.958c10.777 0 19.513 8.736 19.513 19.513 0 10.777-8.736 19.514-19.513 19.514H19.513C8.736 39.027 0 30.29 0 19.513z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle20Icon;
/* prettier-ignore-end */
