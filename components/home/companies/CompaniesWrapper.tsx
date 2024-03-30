import React from "react";

import { companies } from "@/assets/companies";
import CompanyCard from "./CompanyCard";
import Container from "@/components/home/Container";

const backgroundGradients: { from: string; to: string; ring: string }[] = [
    {
        from: "from-red-500",
        to: "to-orange-500",
        ring: "focus-visible:ring-red-500",
    },
    {
        from: "from-orange-500",
        to: "to-orange-300",
        ring: "focus-visible:ring-orange-500",
    },
    {
        from: "from-green-700",
        to: "to-green-500",
        ring: "focus-visible:ring-green-500",
    },
    {
        from: "from-blue-700",
        to: "to-blue-500",
        ring: "focus-visible:ring-blue-700",
    },
    {
        from: "from-black",
        to: "to-gray-600",
        ring: "focus-visible:ring-black",
    },
];

const CompaniesWrapper = () => {
    return (
        <Container className="gap-8 z-10" id="companies">
            <h2 className="text-3xl font-semibold text-blue-950" id="companies">
                Firmy
            </h2>

            <p className="max-w-2xl text-muted-foreground">
                Uczniowie odbywali praktyki w różnorodnych firmach, starannie
                dobrane tak, aby zapewnić im cenne doświadczenie zgodne z ich
                różnymi kierunkami nauczania. Firmy te reprezentowały różne
                sektory i branże, umożliwiając uczniom wszechstronny rozwój
                zawodowy.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-16">
                {companies.map((company, index) => (
                    <CompanyCard
                        key={company.name}
                        company={company}
                        index={index}
                        backgroundGradient={backgroundGradients[index]}
                    />
                ))}
            </div>
        </Container>
    );
};

export default CompaniesWrapper;
