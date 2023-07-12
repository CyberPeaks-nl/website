import cx from "classnames";
import React from "react";
import { Logos } from "./Logos";
import { Logo } from "../types";

type Props = {
  title: string;
  logos: Logo[];
};

export const Collaboration: React.FC<Props> = ({ title, logos }) => {
  return (
    <div className={cx("m-4", "font-mono", "font-thin")}>
      <h4 className={cx("text-sm", "text-gray", "text-center", "md:text-base")}>
        {title}
      </h4>
      <Logos
        className={cx("flex", "flex-col", "justify-center", "sm:flex-row")}
        logos={logos}
      />
    </div>
  );
};
