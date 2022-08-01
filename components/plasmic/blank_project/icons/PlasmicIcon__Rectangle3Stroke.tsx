// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle3StrokeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle3StrokeIcon(props: Rectangle3StrokeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 231 324"}
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
          "M21.6 0h187.611c11.93 0 21.6 9.67 21.6 21.6v280.8c0 11.929-9.67 21.6-21.6 21.6H21.6C9.67 324 0 314.329 0 302.4V21.6C0 9.67 9.67 0 21.6 0zm0 1.851c-10.907 0-19.749 8.842-19.749 19.749v280.8c0 10.907 8.842 19.749 19.749 19.749h187.611c10.907 0 19.749-8.842 19.749-19.749V21.6c0-10.907-8.842-19.749-19.749-19.749H21.6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle3StrokeIcon;
/* prettier-ignore-end */
