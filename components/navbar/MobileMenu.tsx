import React, { FC } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

interface Props extends React.HTMLAttributes<"button"> {}

const MobileMenu: FC<Props> = (props) => {
    return (
        <Button size={"icon"} variant={"outline"} className={props.className}>
            <Menu />
        </Button>
    );
};

export default MobileMenu;
