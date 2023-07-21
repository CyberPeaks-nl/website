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
        "h-[100px]",
        "bg-no-repeat",
        "bg-top",
        "bg-cover",
        "md:h-[200px]",
        "lg:h-[300px]",
      )}
    />
  );
};
