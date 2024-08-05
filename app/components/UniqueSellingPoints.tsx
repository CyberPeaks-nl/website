import React from "react";
import cx from "classnames";
import { USP } from "../types";

type Props = {
  title: React.ReactNode;
  usps: USP[];
};

export const UniqueSellingPoints: React.FC<Props> = ({ title, usps }) => {
  return (
    <div
      className={cx(
        "mt-4",
        "mb-8",
        "mx-8",
        "font-mono",
        "font-thin",
        "md:mx-4",
        "lg:mx-24",
        "xl:mx-48",
      )}
    >
      <h3
        className={cx(
          "mt-6",
          "mb-4",
          "text-center",
          "text-sm",
          "text-dark-gray",
          "md:text-base",
          "md:mt-8",
          "md:mb-6",
        )}
      >
        {title}
      </h3>
      <div
        className={cx(
          "flex",
          "flex-col",
          "md:flex-row",
          "md:mx-8",
          "lg:mx-12",
          "lg:mb-12",
        )}
      >
        {usps.map((usp, index) => {
          return (
            <div
              key={index}
              className={cx(
                "mx-4",
                "mb-4",
                "font-mono",
                "font-normal",
                "text-center",
                "xl:mx-14",
              )}
            >
              {/* eslint-disable @next/next/no-img-element */}
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
              {/* eslint-enable @next/next/no-img-element */}
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
              <span
                className={cx("block", "text-sm", "md:text-md", "lg:text-lg")}
              >
                {usp.description}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
