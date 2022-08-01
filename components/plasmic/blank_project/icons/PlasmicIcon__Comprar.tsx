// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ComprarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ComprarIcon(props: ComprarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 7"}
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
          "M2.71 5.244c-.513 0-.977-.112-1.392-.337a2.548 2.548 0 01-.966-.938A2.606 2.606 0 010 2.622c0-.498.117-.945.352-1.34.234-.4.559-.713.974-.938C1.74.114 2.204 0 2.717 0c.4 0 .767.068 1.099.205.332.132.615.33.85.593l-.477.462A1.91 1.91 0 002.746.652c-.38 0-.725.085-1.032.256-.308.171-.55.408-.725.71a1.98 1.98 0 00-.257 1.004c0 .371.086.708.257 1.01.175.298.417.533.725.704.307.17.652.256 1.032.256.572 0 1.053-.205 1.443-.615l.476.461c-.234.264-.52.464-.857.6a2.859 2.859 0 01-1.098.206zm4.176-.014c-.386 0-.733-.086-1.04-.257a1.893 1.893 0 01-.725-.703 2.05 2.05 0 01-.257-1.026c0-.38.086-.72.257-1.018a1.83 1.83 0 01.725-.703c.307-.17.654-.256 1.04-.256.385 0 .73.085 1.032.256.308.166.547.4.718.703.176.298.264.638.264 1.018 0 .381-.088.723-.264 1.026a1.84 1.84 0 01-.718.703 2.07 2.07 0 01-1.032.256zm0-.616a1.24 1.24 0 001.135-.652c.112-.21.168-.449.168-.718 0-.268-.056-.505-.168-.71a1.177 1.177 0 00-.469-.483 1.313 1.313 0 00-.666-.169c-.25 0-.474.056-.674.169a1.241 1.241 0 00-.469.483 1.455 1.455 0 00-.168.71c0 .269.056.508.168.718.117.205.274.366.469.484.2.112.425.168.674.168zm7.622-3.347c.488 0 .874.142 1.157.425.288.283.432.703.432 1.26v2.233h-.703V3.032c0-.376-.088-.66-.263-.85-.171-.19-.418-.285-.74-.285-.357 0-.64.112-.85.337-.21.22-.315.537-.315.952v2h-.703V3.031c0-.376-.088-.66-.263-.85-.171-.19-.418-.285-.74-.285-.356 0-.64.112-.85.337-.21.22-.315.537-.315.952v2h-.703V1.303h.674v.578c.142-.2.327-.351.557-.454.23-.107.49-.161.784-.161.302 0 .57.061.805.183.235.122.415.3.542.535.147-.225.35-.4.608-.528.264-.127.559-.19.886-.19zm4.722 0c.375 0 .712.083 1.01.249.298.166.53.398.696.696.17.298.256.642.256 1.032 0 .391-.085.738-.256 1.04-.166.298-.398.53-.696.696a2.04 2.04 0 01-1.01.25c-.279 0-.535-.055-.77-.162a1.601 1.601 0 01-.586-.469v2.007h-.703V1.304h.674v.615c.156-.215.354-.376.593-.484.24-.112.503-.168.791-.168zm-.06 3.347a1.24 1.24 0 001.135-.652 1.44 1.44 0 00.177-.718c0-.268-.059-.505-.176-.71a1.177 1.177 0 00-.469-.483 1.313 1.313 0 00-.666-.169c-.244 0-.466.059-.667.176a1.254 1.254 0 00-.468.476 1.455 1.455 0 00-.169.71c0 .269.056.508.169.718.112.205.268.366.468.484.2.112.423.168.667.168zm3.448-2.659a1.2 1.2 0 01.542-.512c.239-.117.53-.176.871-.176v.681a1.371 1.371 0 00-.161-.007c-.38 0-.681.115-.9.344-.216.225-.323.547-.323.967v1.933h-.703V1.304h.674v.651zm3.466-.688c.537 0 .948.132 1.23.396.289.263.433.656.433 1.179v2.343h-.667v-.512c-.117.18-.285.32-.505.417-.215.093-.471.14-.769.14-.435 0-.784-.106-1.047-.316a1.014 1.014 0 01-.389-.827c0-.342.125-.616.374-.82.249-.21.645-.316 1.186-.316h1.114v-.139c0-.302-.088-.534-.264-.695-.176-.162-.434-.242-.776-.242a2 2 0 00-.674.117c-.22.073-.405.173-.557.3l-.293-.527c.2-.161.44-.283.718-.366.278-.088.574-.132.886-.132zm-.16 3.42c.268 0 .5-.058.695-.176a1.05 1.05 0 00.425-.512v-.542H25.96c-.596 0-.894.2-.894.6 0 .196.076.35.227.462.152.112.362.168.63.168zm3.578-2.732a1.2 1.2 0 01.542-.512c.24-.117.53-.176.872-.176v.681a1.372 1.372 0 00-.162-.007c-.38 0-.68.115-.9.344-.215.225-.323.547-.323.967v1.933h-.703V1.304h.674v.651z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ComprarIcon;
/* prettier-ignore-end */
