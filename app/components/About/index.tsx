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
        "lg:py-8",
      )}
    >
      <div className={cx("max-w-lg", "mx-auto", "lg:max-w-xl")}>
        <h2
          className={cx(
            "my-4",
            "text-base",
            "md:text-xl",
            "md:my-5",
            "lg:my-6",
            "lg:text-2xl",
          )}
        >
          {title}
        </h2>
        <p
          className={cx(
            "mx-2",
            "text-xs",
            "font-thin",
            "md:text-sm",
            "lg:my-6",
            "lg:text-base",
          )}
        >
          {children}
        </p>
        <IconLinkList className={cx("my-6", "lg:mt-8")} iconLinks={iconLinks} />
      </div>
    </div>
  );
};
