import cx from "classnames";
import React from "react";

type Props = {
  path: string;
};

export const BannerImage: React.FC<Props> = ({ path }) => {
  return (
    <div
      style={{ backgroundImage: `url("${path}")` }}
      className={cx(
        "w-full",
        "h-[140px]",
        "bg-no-repeat",
        "bg-top",
        "bg-cover",
        "md:h-[200px]",
        "lg:h-[320px]",
      )}
    />
  );
};
