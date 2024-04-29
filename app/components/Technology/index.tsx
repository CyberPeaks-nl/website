import cx from "classnames";
import { Logo } from "../../types";
import { LogoGrid } from "./LogoGrid";

type Props = {
  title: string;
  logos: Logo[];
};

export const Technology: React.FC<Props> = ({ title, logos }) => {
  return (
    <div
      className={cx(
        "my-6",
        "mx-8",
        "font-mono",
        "font-thin",
        "md:my-8",
        "lg:my-12",
      )}
    >
      <h3
        className={cx(
          "text-center",
          "text-sm",
          "text-dark-gray",
          "md:text-base",
        )}
      >
        {title}
      </h3>
      <LogoGrid logos={logos} />
    </div>
  );
};
