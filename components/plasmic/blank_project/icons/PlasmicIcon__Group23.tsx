// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group23Icon(props: Group23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 7"}
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
          "M3.483 0l1.076 2.18 2.406.35-1.741 1.698.411 2.396-2.152-1.131L1.33 6.624l.411-2.396L0 2.53l2.406-.35L3.483 0zm8.056 0l1.076 2.18 2.407.35-1.742 1.698.411 2.396-2.152-1.131-2.152 1.131.41-2.396-1.74-1.698 2.406-.35L11.539 0zm8.421 0l1.184 2.18 2.647.35-1.915 1.698.452 2.396-2.367-1.131-2.368 1.131.452-2.396-1.916-1.698 2.648-.35L19.96 0zm8.424 0l1.076 2.18 2.406.35-1.741 1.698.41 2.396-2.151-1.131-2.153 1.131.411-2.396-1.741-1.698 2.406-.35L28.384 0zm8.055 0l1.076 2.18 2.407.35-1.742 1.698.411 2.396-2.152-1.131-2.153 1.131.412-2.396-1.742-1.698 2.407-.35L36.439 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group23Icon;
/* prettier-ignore-end */
