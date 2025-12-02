import Image from "next/image";
import cx from "classnames";
import React from "react";
import { Logo } from "../types";

type Props = {
  logo: Logo;
};

export const Header: React.FC<Props> = ({
  logo: {
    label,
    path,
    size: [width, height],
  },
}) => {
  return (
    <div className={cx("p-6", "md:p-8", "lg:p-10")}>
      <Image
        className={cx("mx-auto", "h-8", "w-auto", "md:h-12", "lg:h-16")}
        alt={label}
        title={label}
        src={path}
        width={width}
        height={height}
      />
    </div>
  );
};
