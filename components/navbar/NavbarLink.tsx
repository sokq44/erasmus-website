import Link from "next/link";
import React, { FC } from "react";

export interface NavbarLinkProps {
    isOnMobile?: boolean;
    id: string;
    name: string;
}

const NavbarLink: FC<NavbarLinkProps> = (props) => {
    return (
        <li>
            <Link
                href={`#${props.id}`}
                className={`${
                    props.isOnMobile ? "bg-blue-500" : ""
                } text-white hover:bg-blue-600 transition duration-300 px-2 py-1 rounded focus:outline-none focus-visible:ring-1 ring-white focus:ring-offset-2`}
            >
                {props.name}
            </Link>
        </li>
    );
};

export default NavbarLink;
