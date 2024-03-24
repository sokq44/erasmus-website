import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
    children: string;
    className?: string;
}

const HeroTitle: FC<Props> = (props) => {
    const { children, className } = props;

    return (
        <h1
            className={cn(
                "text-4xl text-transparent font-semibold bg-clip-text self-start bg-gradient-to-r",
                className
            )}
        >
            {children}
        </h1>
    );
};

export default HeroTitle;
