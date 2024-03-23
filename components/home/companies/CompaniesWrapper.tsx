import React, { FC } from "react";

import { companies } from "@/assets/companies";
import CompanyCard from "./CompanyCard";
import Container from "@/components/Container";

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
        <Container className="gap-8 z-10">
            <h2 className="text-3xl font-semibold text-blue-950 ">Companies</h2>

            <p className="max-w-2xl text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                natus nostrum amet iusto, expedita ipsa soluta, ea reprehenderit
                aspernatur velit eum saepe quis deleniti excepturi optio error
                quisquam! Itaque, adipisci.
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
