import React from "react";
import cx from "classnames";
import { USP } from "../types";

type Props = {
  usps: USP[];
};

export const UniqueSellingPoints: React.FC<Props> = ({ usps }) => {
  return (
    <div
      className={cx(
        "flex",
        "flex-col",
        "mt-4",
        "mb-8",
        "md:flex-row",
        "md:mx-4",
        "lg:mx-24",
        "xl:mx-48",
      )}
    >
      {usps.map((usp, index) => {
        return (
          <div
            key={index}
            className={cx(
              "mb-4",
              "mx-8",
              "font-mono",
              "text-center",
              "lg:mx-8",
              "xl:mx-16",
            )}
          >
            <img
              className={cx(
                "mx-auto",
                "max-w-[100px]",
                "max-h-[100px]",
                "h-auto",
                "w-auto",
                "lg:max-w-[120px]",
                "lg:max-h-[120px]",
              )}
              alt={usp.icon.label}
              title={usp.icon.label}
              src={usp.icon.path}
              width={usp.icon.size[0]}
              height={usp.icon.size[1]}
            />
            <span
              className={cx(
                "block",
                "mb-2",
                "font-bold",
                "text-purple",
                "lg:text-lg",
              )}
            >
              {usp.title}
            </span>
            <span className={cx("block", "text-sm", "lg:text-md")}>
              {usp.description}
            </span>
          </div>
        );
      })}
    </div>
  );
};
