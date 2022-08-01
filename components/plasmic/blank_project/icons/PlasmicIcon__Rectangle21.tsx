// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle21Icon(props: Rectangle21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 142 44"}
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
          "M0 21.624C0 9.68 9.681 0 21.624 0h98.098c11.943 0 21.624 9.681 21.624 21.624 0 11.942-9.681 21.624-21.624 21.624H21.624C9.68 43.248 0 33.566 0 21.624z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle21Icon;
/* prettier-ignore-end */
