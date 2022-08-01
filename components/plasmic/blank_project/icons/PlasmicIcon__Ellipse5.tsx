// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse5Icon(props: Ellipse5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 66 66"}
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
          "M65.397 32.699c0 18.059-14.64 32.698-32.698 32.698C14.639 65.397 0 50.757 0 32.7 0 14.639 14.64 0 32.699 0c18.059 0 32.698 14.64 32.698 32.699z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse5Icon;
/* prettier-ignore-end */
