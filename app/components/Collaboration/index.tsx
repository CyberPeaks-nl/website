import cx from "classnames";
import React from "react";
import { Logos } from "./Logos";
import { Logo } from "../../types";

type Props = {
  title: string;
  logos: Logo[];
};

export const Collaboration: React.FC<Props> = ({ title, logos }) => {
  return (
    <div className={cx("m-4", "font-mono", "font-thin", "lg:m-12")}>
      <h4
        className={cx(
          "text-sm",
          "text-light-gray",
          "text-center",
          "md:text-base",
          "lg:my-4",
        )}
      >
        {title}
      </h4>
      <Logos
        className={cx(
          "m-2",
          "flex",
          "flex-wrap",
          "gap-4",
          "justify-center",
          "justify-items-center",
          "items-center",
        )}
        logos={logos}
      />
    </div>
  );
};
