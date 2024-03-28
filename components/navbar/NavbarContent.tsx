"use client";

import React, { FC } from "react";
import NavbarLink from "./NavbarLink";
import { links } from "@/assets/links";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface Props {
    className?: string;
    isOnMobile?: boolean;
}

const NavbarContent: FC<Props> = (props) => {
    const pathname = usePathname();
    let navbarLinks = links;

    if (pathname !== "/") {
        navbarLinks = navbarLinks.map((link) => {
            return {
                ...link,
                href: `${process.env.NEXT_PUBLIC_PAGE_URL}${link.href}`,
            };
        });
    }

    return (
        <ul className={cn(props.className, "gap-4 lg:gap-16")}>
            {navbarLinks.map((link, i) => (
                <NavbarLink
                    key={i}
                    href={link.href}
                    name={link.name}
                    isOnMobile={props.isOnMobile}
                    index={i}
                />
            ))}
        </ul>
    );
};

export default NavbarContent;
