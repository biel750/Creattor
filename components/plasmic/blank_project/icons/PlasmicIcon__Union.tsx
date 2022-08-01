// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UnionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UnionIcon(props: UnionIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 289 73"}
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
          "M16 0C7.163 0 0 7.163 0 16v18c0 8.837 7.163 16 16 16h1.62l-.737 22.322L35.99 50H273c8.837 0 16-7.163 16-16V16c0-8.837-7.163-16-16-16H16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UnionIcon;
/* prettier-ignore-end */
