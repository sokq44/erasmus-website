import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const Container: FC<Props> = (props) => {
    return (
        <section className={cn("py-24 flex flex-col", props.className)}>
            {props.children}
        </section>
    );
};

export default Container;
