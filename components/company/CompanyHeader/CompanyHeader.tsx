import React, { FC } from "react";

import { cn } from "@/lib/utils";

import Container from "@/components/home/Container";

import { TypewriterEffectSmooth } from "../../ui/typewritter-effect";

import { Company } from "@/types/company";
import CompanyDescription from "./CompanyDescription";

interface Props {
    className?: string;
    company: Company;
}

const bgColors = {
    "forja-roja": "bg-red-600",
    "microbit-servicio-tecnico": "bg-green-600",
    "samsung-electronics": "bg-blue-600",
    euromind: "bg-orange-600",
    "jc-valvuar-audio": "bg-black",
};

const CompanyHeader: FC<Props> = (props) => {
    const { className, company } = props;

    const words = [
        {
            text: company.name,
        },
    ];

    return (
        <>
            <Container
                className={cn(
                    "text-5xl text-center font-bold mx-auto pb-10 pt-0",
                    className
                )}
            >
                <TypewriterEffectSmooth
                    words={words}
                    cursorClassName={bgColors[company.slug]}
                />
            </Container>
            <CompanyDescription text={company.subpageDescription}/>
        </>
    );
};

export default CompanyHeader;
