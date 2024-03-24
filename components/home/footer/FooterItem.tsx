import React, { FC } from "react";
import Link from "next/link";

interface Props {
  children?: React.ReactNode;
  href?: string;
  icon?: JSX.Element;
}

const FooterItem: FC<Props> = (props) => {
  const { children, href, icon } = props;
  return (
    <Link
      href={href ? href : ""}
      target="_blank"
      className="flex items-center hover:bg-[#0077B6] rounded px-1 py-1"
    >
      <li className="py-1">{children}</li>
      &nbsp;&nbsp;
      {icon}
    </Link>
  );
};

export default FooterItem;
