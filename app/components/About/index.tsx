import cx from "classnames";
import React, { PropsWithChildren } from "react";
import { IconLinkList, IconLink } from "./IconList";

export { type IconLink };

type Props = {
  title: string;
  iconLinks: IconLink[];
};

export const About: React.FC<PropsWithChildren<Props>> = ({
  title,
  iconLinks,
  children,
}) => {
  return (
    <div
      className={cx(
        "bg-purple",
        "px-8",
        "py-3",
        "font-mono",
        "text-white",
        "text-center",
      )}
    >
      <div className={cx("max-w-lg", "mx-auto")}>
        <h2 className={cx("my-4", "text-lg", "md:text-xl")}>{title}</h2>
        <p className={cx("text-xs", "font-thin", "md:text-sm")}>{children}</p>
        <IconLinkList className={cx("my-5")} iconLinks={iconLinks} />
      </div>
    </div>
  );
};
