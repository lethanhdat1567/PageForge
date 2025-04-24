import React from "react";
import { ArrowUpRight } from "lucide-react";
import classNames from "classnames/bind";
import LinkNext from "next/link";
import styles from "./Link.module.scss";

const cx = classNames.bind(styles);

type LinkVariant =
  | "white-lime-outline"
  | "white-black-outline"
  | "dark-lime"
  | "dark-white"
  | "lime-black"
  | "lime-outline"
  | "lime-white"
  | "white-black"
  | "white-lime"
  | string;

type LinkProps = {
  children: React.ReactNode;
  path: string;
  variant?: LinkVariant;
  reverse?: boolean;
  className?: string;
};

const Link: React.FC<LinkProps> = ({
  children,
  path,
  variant = "white-lime",
  reverse = false,
  className,
}) => {
  return (
    <LinkNext href={path} passHref className={cx("link-wrap")}>
      <div className={cx("link", variant, className)}>
        {reverse ? (
          <>
            <span className={cx("label")}>{children}</span>
            <div className={cx("icon-wrap")}>
              <ArrowUpRight size={30} className={cx("icon")} />
            </div>
          </>
        ) : (
          <>
            <div className={cx("icon-wrap")}>
              <ArrowUpRight size={30} className={cx("icon")} />
            </div>
            <span className={cx("label")}>{children}</span>
          </>
        )}
      </div>
    </LinkNext>
  );
};

export default Link;
