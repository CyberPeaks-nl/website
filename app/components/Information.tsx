import cx from "classnames";
import React from "react";

type Props = {
  companyName: string;
  infoLines: string[];
};

export const Information: React.FC<Props> = ({ companyName, infoLines }) => {
  return (
    <div
      className={cx(
        "flex",
        "flex-col",
        "justify-center",
        "p-8",
        "bg-gray",
        "font-mono",
        "font-thin",
        "text-white",
        "text-xs",
        "text-center",
        "lg:flex-row"
      )}
    >
      <span className={cx("font-normal")}>{companyName}</span>
      {infoLines.map((line, index) => (
        <span className={cx("flex", "flex-row", "justify-center")} key={index}>
          <span className={cx("hidden", "mx-2", "lg:block")}>/\</span>
          <span>{line}</span>
        </span>
      ))}
    </div>
  );
};
