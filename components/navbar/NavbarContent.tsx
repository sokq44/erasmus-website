import React, { FC } from "react";
import NavbarLink from "./NavbarLink";
import { links } from "@/assets/links";

interface Props {}

const NavbarContent: FC<Props> = () => {
    return (
        <ul className="gap-4">
            {links.map((link) => (
                <NavbarLink key={link.id} id={link.id} name={link.name} />
            ))}
        </ul>
    );
};

export default NavbarContent;
