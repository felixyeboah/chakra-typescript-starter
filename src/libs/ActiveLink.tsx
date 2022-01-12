import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { Children } from "react";

type LayoutProps = {
  children: JSX.Element;
  activeClassName: string;
  href: LinkProps["href"];
  as?: LinkProps["as"];
};

const ActiveLink = ({ children, activeClassName, ...props }: LayoutProps) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || "";

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;
