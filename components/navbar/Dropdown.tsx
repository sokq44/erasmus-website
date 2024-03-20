"use client";

import React, { FC } from "react";
import * as NavigationMenu from "../ui/navigation-menu";

interface Props {
    components: { title: string; href: string; description: string }[];
}

const Dropdown: FC<Props> = (props) => {
    return (
        <NavigationMenu.NavigationMenu>
            <NavigationMenu.NavigationMenuList>
                {props.components.map((component) => (
                    <NavigationMenu.NavigationMenuItem key={component.title}>
                        <NavigationMenu.NavigationMenuTrigger>
                            {component.title}
                        </NavigationMenu.NavigationMenuTrigger>
                        <NavigationMenu.NavigationMenuContent>
                            <NavigationMenu.NavigationMenuLink>
                                {component.title}
                            </NavigationMenu.NavigationMenuLink>
                        </NavigationMenu.NavigationMenuContent>
                    </NavigationMenu.NavigationMenuItem>
                ))}
            </NavigationMenu.NavigationMenuList>
        </NavigationMenu.NavigationMenu>
    );
};

export default Dropdown;
