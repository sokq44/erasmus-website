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
                </Button>
            </Sheet.SheetTrigger>

            <Sheet.SheetContent>
                <NavbarContent />
            </Sheet.SheetContent>
        </Sheet.Sheet>
    );
};

export default MobileMenu;
