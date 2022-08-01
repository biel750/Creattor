// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Union4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Union4Icon(props: Union4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 12"}
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
          "M12.304 6l-6 6-1.313-1.313 3.815-3.815H0V5.015h8.692l-3.7-3.702L6.303 0l6 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Union4Icon;
/* prettier-ignore-end */
