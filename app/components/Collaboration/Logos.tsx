import Image from "next/image";
import cx from "classnames";
import React from "react";
import { Logo } from "../../types";

type Props = {
  className?: string;
  logos: Logo[];
};

export const Logos: React.FC<Props> = ({ className, logos }) => {
  return (
    <div className={className}>
      {logos.map(({ label, path, size: [width, height] }, index) => {
        return (
          <Image
            className={cx(
              "my-4",
              "mx-auto",
              "max-w-[150px]",
              "max-h-[30px]",
              "h-auto",
              "w-auto",
              "md:mx-4",
              "md:my-6",
              "md:max-w-[200px]",
              "md:max-h-[40px]",
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
