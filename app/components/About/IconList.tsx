import cx from "classnames";
import React, { SVGProps } from "react";

export type IconLink = [
  Icon: React.FC<SVGProps<SVGSVGElement>>,
  name: string,
  link: string
];

type Props = {
  className?: string;
  iconLinks: IconLink[];
};

export const IconLinkList: React.FC<Props> = ({ className, iconLinks }) => {
  return (
    <div className={className}>
      {iconLinks.map(([Icon, name, link], index) => {
        return (
          <a
            className={cx(
              "inline-block",
              "mx-1",
              "p-2",
              "border-white",
              "border",
              "rounded-full",
              "md:mx-2"
            )}
            key={index}
            title={name}
            href={link}
          >
            <Icon
              className={cx("fill-white", "w-4", "h-4", "md:w-6", "md:h-6")}
              width="16"
              height="16"
            />
          </a>
        );
      })}
    </div>
  );
};
