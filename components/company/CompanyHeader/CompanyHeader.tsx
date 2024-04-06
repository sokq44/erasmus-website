import React, { FC } from "react";

import { cn } from "@/lib/utils";

import Container from "@/components/home/Container";

// import { TypewriterEffectSmooth } from "../../ui/typewritter-effect";

import { Company } from "@/types/company";
import CompanyDescription from "./CompanyDescription";
import AnimatedTitle from "./AnimatedTitle";

interface Props {
    className?: string;
    company: Company;
}

const CompanyHeader: FC<Props> = (props) => {
    const { className, company } = props;

    return (
        <>
            <Container
                className={cn(
                    "text-5xl text-center font-bold mx-auto py-0 md:py-0",
                    className
                )}
            >
                <AnimatedTitle company={company} />
            </Container>
            <CompanyDescription
                className="mt-16 space-y-8"
                text={company.subpageDescription}
            />
        </>
    );
};

export default CompanyHeader;
