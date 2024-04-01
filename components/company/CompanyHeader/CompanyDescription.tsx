"use client";

import React, { FC } from "react";

import { cn } from "@/lib/utils";

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const CompanyDescription: FC<Props> = (props) => {
    const { children, className } = props;

    return (
        <p
            className={cn(
                "text-muted-foreground max-w-2xl mx-auto text-center",
                className
            )}
        >
            {children}
        </p>
    );
};

export default CompanyDescription;
