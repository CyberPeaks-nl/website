/* eslint-disable @next/next/no-img-element */
import cx from "classnames";
import React from "react";
import { Logo } from "../types";

type Props = {
  className?: string;
  logos: Logo[];
};

export const Logos: React.FC<Props> = ({ className, logos }) => {
  return (
    <div className={className}>
      {logos.map(({ path, size: [width, height] }, index) => {
        return (
          <img
            className={cx(
              "my-6",
              "mx-auto",
              "max-w-[200px]",
              "max-h-[40px]",
              "h-auto",
              "w-auto",
              "md:mx-4"
            )}
            key={index}
            alt="Logo"
            src={path}
            width={width}
            height={height}
          />
        );
      })}
    </div>
  );
};
