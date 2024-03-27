import React, { FC } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import * as Sheet from "../ui/sheet";
import NavbarContent from "./NavbarContent";

interface Props {}

const MobileMenu: FC<Props> = () => {
    return (
        <Sheet.Sheet>
            <Sheet.SheetTrigger asChild>
                <Button size={"icon"} variant={"outline"}>
                    <Menu />
                    <span className="sr-only">Navigation Menu</span>
                </Button>
            </Sheet.SheetTrigger>

            <Sheet.SheetContent>
                <NavbarContent
                    isOnMobile
                    className="flex flex-col mt-16 gap-16"
                />
            </Sheet.SheetContent>
        </Sheet.Sheet>
    );
};

export default MobileMenu;
