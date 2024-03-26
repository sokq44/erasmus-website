import React, { FC } from "react";
import NavbarLink from "./NavbarLink";
import { links } from "@/assets/links";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    isOnMobile?: boolean;
}

const NavbarContent: FC<Props> = (props) => {
    return (
        <ul className={cn(props.className, "gap-4 lg:gap-16")}>
            {links.map((link, i) => (
                <NavbarLink
                    key={link.id}
                    id={link.id}
                    name={link.name}
                    isOnMobile={props.isOnMobile}
                    index={i}
                />
            ))}
        </ul>
    );
};

export default NavbarContent;
