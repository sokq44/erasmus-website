"use client";

import React, { FC } from "react";

interface Props {
    text?: string[];
    className?: string;
}

const CompanyDescription: FC<Props> = (props) => {
    const { text } = props;

    return (
        <div className={props.className}>
            {text!.map((paragraph) => (
                <p
                    key=""
                    className="text-muted-foreground max-w-2xl mx-auto text-left"
                >
                    {paragraph}
                </p>
            ))}
        </div>
    );
};

export default CompanyDescription;
