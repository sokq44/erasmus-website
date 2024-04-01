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
        <li className="py-1 flex">
            <Link
                href={href ? href : ""}
                target="_blank"
                className="flex items-center transition duration-300 relative rounded px-1 py-1 footer-item focus-visible:ring-1 focus-visible:ring-offset-2 ring-white focus:outline-none"
            >
                {children}
                &nbsp;&nbsp;
                {icon}
            </Link>
        </li>
    );
};

export default FooterItem;
