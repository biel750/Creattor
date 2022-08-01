// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShareIcon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShareIcon2Icon(props: ShareIcon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 35"}
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
          "M42.983 18.575a1.274 1.274 0 00.032-1.86L26.095.36c-.81-.78-2.16-.208-2.16.916v6.827c-6.324-.098-11.076 1.556-14.607 4.091-3.587 2.575-5.872 6.028-7.28 9.374C.641 24.911.099 28.173.013 30.409c-.043 1.103.023 2.013.18 2.57.041.141.096.29.174.422a.88.88 0 00.48.403.776.776 0 00.748-.164 1.29 1.29 0 00.303-.41l.009-.017.006-.016.001-.001.002-.004.013-.028a7.633 7.633 0 01.342-.624c.26-.43.676-1.034 1.285-1.72 1.216-1.367 3.206-3.056 6.288-4.289 1.754-.701 4.678-1.02 7.545-1.072 2.736-.05 5.288.146 6.546.424v7.026c0 1.104 1.309 1.685 2.128.946l16.92-15.28z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M37.77 16.758c1.223-1.421 0-3.448 0-3.448l-2.109-3.698L26.094.36c-.808-.78-2.159-.208-2.159.916v6.827c-6.324-.098-11.076 1.556-14.607 4.091-3.587 2.575-5.872 6.028-7.28 9.374C.641 24.911.099 28.173.013 30.409c-.043 1.103.023 2.013.18 2.57.041.141.096.29.174.422a.88.88 0 00.48.403.776.776 0 00.748-.164 1.29 1.29 0 00.303-.41l.009-.017.006-.016.001-.001.002-.004.013-.028a7.663 7.663 0 01.342-.624c.26-.43.676-1.034 1.285-1.72 1.216-1.367 7.962-6.154 11.783-8.064 3.184-1.91 8.596-3.184 8.596-3.184v7.642c0 1.103 1.309 1.685 2.128.945L37.77 16.758z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShareIcon2Icon;
/* prettier-ignore-end */
