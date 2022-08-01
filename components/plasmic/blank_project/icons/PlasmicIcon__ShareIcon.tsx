// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShareIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShareIconIcon(props: ShareIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 16"}
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
          "M19.852 8.58a.588.588 0 00.015-.86L12.052.166a.588.588 0 00-.997.423v3.153c-2.921-.045-5.116.72-6.747 1.89-1.656 1.19-2.712 2.784-3.362 4.33-.65 1.544-.9 3.05-.94 4.083-.02.51.01.93.084 1.186a.827.827 0 00.08.196.408.408 0 00.222.186.359.359 0 00.345-.076.602.602 0 00.14-.19l.004-.007.003-.008v-.002l.007-.013a3.538 3.538 0 01.158-.288c.12-.198.312-.478.593-.794.562-.632 1.481-1.412 2.904-1.981.81-.324 2.161-.472 3.485-.496 1.264-.022 2.442.068 3.024.196V15.2c0 .51.604.779.982.437l7.815-7.057z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M17.445 7.74c.564-.657 0-1.593 0-1.593L16.47 4.44 12.05.166a.588.588 0 00-.996.423v3.153c-2.921-.045-5.116.72-6.747 1.89-1.656 1.19-2.712 2.784-3.362 4.33-.65 1.544-.9 3.05-.94 4.083-.02.51.01.93.084 1.186a.827.827 0 00.08.196.408.408 0 00.222.186.359.359 0 00.345-.076.602.602 0 00.14-.19l.004-.007.003-.008v-.002l.007-.013a3.538 3.538 0 01.158-.288c.12-.198.312-.478.593-.794.562-.632 3.678-2.843 5.442-3.725 1.47-.882 3.97-1.47 3.97-1.47v3.529c0 .51.605.778.983.436l5.408-5.265z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShareIconIcon;
/* prettier-ignore-end */
