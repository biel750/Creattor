// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group34Icon(props: Group34IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 6"}
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

      <circle cx={"3"} cy={"3"} r={"3"} fill={"currentColor"}></circle>

      <circle cx={"13"} cy={"3"} r={"3"} fill={"currentColor"}></circle>

      <circle cx={"23"} cy={"3"} r={"3"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Group34Icon;
/* prettier-ignore-end */
