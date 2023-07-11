import React from "react";
import cx from "classnames";

const NotFound: React.FC = () => {
  return (
    <main
      className={cx(
        "absolute",
        "inset-0",
        "bg-white",
        "font-mono",
        "text-center"
      )}
    >
      <h1 className={cx("text-xl", "font-bold", "mt-20")}>404 - Not Found</h1>
      <p className={cx("mr-2")}>Let me guide you back on track:</p>
      <a className={cx("text-purple", "underline")} href="/">
        Go to the homepage
      </a>
    </main>
  );
};

export default NotFound;
