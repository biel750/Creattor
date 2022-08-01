// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShareIcon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShareIcon3Icon(props: ShareIcon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 23"}
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
          "M28.29 12.226A.838.838 0 0028.311 11L17.174.237a.838.838 0 00-1.42.603v4.493c-4.163-.064-7.29 1.025-9.615 2.693-2.36 1.695-3.864 3.967-4.791 6.17-.926 2.2-1.283 4.347-1.34 5.818-.028.726.016 1.325.12 1.691.026.094.062.192.114.279a.58.58 0 00.316.265.511.511 0 00.492-.108.857.857 0 00.2-.27l.005-.011.004-.01v-.001l.002-.003.008-.018.041-.084c.038-.074.099-.186.185-.327.171-.282.445-.68.845-1.132.8-.9 2.11-2.011 4.139-2.823 1.155-.462 3.08-.672 4.966-.706 1.8-.032 3.48.096 4.309.28v4.624a.838.838 0 001.4.622L28.29 12.226z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M24.86 11.03c.804-.936 0-2.27 0-2.27l-1.39-2.434L17.174.237a.838.838 0 00-1.42.603v4.493c-4.163-.064-7.29 1.025-9.615 2.693-2.36 1.695-3.864 3.967-4.791 6.17-.926 2.2-1.283 4.347-1.34 5.818-.028.726.016 1.325.12 1.691.026.094.062.192.114.279a.58.58 0 00.316.265.511.511 0 00.492-.108.857.857 0 00.2-.27l.005-.011.004-.01v-.001l.002-.003.008-.018.041-.084c.038-.074.099-.186.185-.327.171-.282.445-.68.845-1.132.8-.9 5.24-4.05 7.755-5.308 2.096-1.257 5.659-2.095 5.659-2.095v5.03a.838.838 0 001.4.622l7.706-7.505z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShareIcon3Icon;
/* prettier-ignore-end */
