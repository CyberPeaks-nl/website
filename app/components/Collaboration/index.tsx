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
    <div className={cx("p-4", "bg-light-gray", "font-mono", "font-thin")}>
      <h4 className={cx("text-sm", "text-center", "md:text-base", "lg:my-4")}>
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
          "lg:m-8",
        )}
        logos={logos}
      />
    </div>
  );
};
