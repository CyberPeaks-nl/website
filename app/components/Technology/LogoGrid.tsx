/* eslint-disable @next/next/no-img-element */
import cx from "classnames";
import { Logo } from "../types";

type Props = {
  logos: Logo[];
};

export const LogoGrid: React.FC<Props> = ({ logos }) => {
  return (
    <div
      className={cx(
        "my-8",
        "mx-2",
        "grid",
        "grid-cols-6",
        "gap-5",
        "justify-items-center",
        "items-center",
        "md:mx-auto",
        "md:w-5/6",
        "md:grid-cols-8",
        "md:my-10",
        "md:gap-8",
        "lg:w-2/3",
        "lg:my-14",
        "lg:gap-10",
      )}
    >
      {logos.map(({ label, path, size: [width, height] }, index) => {
        return (
          <img
            className={cx(
              "w-8",
              "h-8",
              "md:w-12",
              "md:h-12",
              "lg:w-16",
              "lg:h-16",
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
