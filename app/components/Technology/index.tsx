import cx from "classnames";
import { Logo } from "../../types";
import { LogoGrid } from "./LogoGrid";

type Props = {
  title: string;
  logos: Logo[];
};

export const Technology: React.FC<Props> = ({ title, logos }) => {
  return (
    <div className={cx("my-6", "mx-8", "font-mono", "font-thin", "lg:my-10")}>
      <h3
        className={cx(
          "mb-5",
          "text-center",
          "text-sm",
          "text-dark-gray",
          "md:text-base",
          "lg:mb-8",
        )}
      >
        {title}
      </h3>
      <LogoGrid logos={logos} />
    </div>
  );
};
