// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group50670IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group50670Icon(props: Group50670IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 20"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        stroke: "currentcolor",

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
          "M15.304 9.835l-6 5.89-1.313-1.29 3.815-3.744H0V8.868h11.692l-3.7-3.634 1.312-1.289 6 5.89z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M13 1h4a3 3 0 013 3v11.67a3 3 0 01-3 3h-4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default Group50670Icon;
/* prettier-ignore-end */
