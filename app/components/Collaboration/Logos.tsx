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
      {logos.map(({ label, path, size: [width, height] }, index) => {
        return (
          <img
            className={cx(
              "my-4",
              "mx-auto",
              "max-w-[200px]",
              "max-h-[40px]",
              "h-auto",
              "w-auto",
              "md:mx-4",
              "md:my-6",
              "lg:mx-8",
              "lg:max-w-[300px]",
              "lg:max-h-[60px]",
            )}
            key={index}
            alt={label}
            title={label}
            src={path}
            width={width}
            height={height}
          />
        );
      })}
    </div>
  );
};
