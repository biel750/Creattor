// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PintrestIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PintrestIcon(props: PintrestIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M3.5 12a8.5 8.5 0 115.573 7.983c.577-1.546 1.137-3.1 1.679-4.658.574.41 1.315.675 2.248.675 1.935 0 3.975-1.275 4.48-3.804C18.117 9.021 15.574 6 12 6c-1.503 0-2.981.604-4.087 1.562C6.805 8.523 6 9.907 6 11.5c0 .775.234 1.638.791 2.206a1.01 1.01 0 001.416.001 1 1 0 00.022-1.392c-.786-.98.25-2.596.994-3.241C9.996 8.404 11.017 8 12 8c2.427 0 3.884 1.979 3.52 3.804C15.216 13.318 14.064 14 13 14c-.818 0-1.258-.345-1.54-.792.154-.484.285-.924.379-1.282.192-.737.308-1.626-.355-2.179-.493-.41-1.075-.32-1.431-.141C9.39 9.936 9 10.71 9 11.5c0 .441.069 1.125.317 1.832a171.338 171.338 0 01-2.038 5.738A8.492 8.492 0 013.5 12zM12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PintrestIcon;
/* prettier-ignore-end */
