import cx from "classnames";
import React from "react";

type Props = {
  fullName: string;
  avatarPath: string;
  emailAddress: string;
  phoneNumber: string;
};

export const Contact: React.FC<Props> = ({
  avatarPath,
  fullName,
  emailAddress,
  phoneNumber,
}) => {
  return (
    <div className={cx("p-4", "border-b", "border-b-gray", "font-mono")}>
      <h3 className={cx("font-bold", "text-lg", "text-center", "md:text-xl")}>
        Get in touch?
      </h3>
      <div className={cx("flex", "justify-center", "my-4")}>
        <img
          className={cx("w-20", "h-20", "rounded-full", "md:w-24", "md:h-24")}
          src={avatarPath}
          width="460"
          height="460"
        />
        <div
          className={cx(
            "flex",
            "flex-col",
            "justify-center",
            "space-y-1",
            "ml-3",
            "text-sm",
            "md:text-base"
          )}
        >
          <span className={cx("block")}>{fullName}</span>
          <a
            className={cx("block", "text-purple", "underline")}
            href={`mailto:${emailAddress}`}
          >
            {emailAddress}
          </a>
          <a
            className={cx("block", "text-purple", "underline")}
            href={`tel:${phoneNumber}`}
          >
            {phoneNumber}
          </a>
        </div>
      </div>
    </div>
  );
};
