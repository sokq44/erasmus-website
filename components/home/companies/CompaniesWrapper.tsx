import React from "react";

import { companies } from "@/assets/companies";
import CompanyCard from "./CompanyCard";
import Container from "@/components/home/Container";

const backgroundGradients: { from: string; to: string }[] = [
    {
        from: "from-red-500",
        to: "to-orange-500",
    },
    {
        from: "from-green-500",
        to: "to-blue-500",
    },
    {
        from: "from-yellow-500",
        to: "to-amber-500",
    },
    {
        from: "from-pink-500",
        to: "to-purple-500",
    },
    {
        from: "from-teal-500",
        to: "to-cyan-500",
    },
];

const CompaniesWrapper = () => {
    return (
        <Container className="gap-8 z-10" id="companies">
            <h2 className="text-3xl font-semibold text-blue-950" id="companies">
                Companies
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
