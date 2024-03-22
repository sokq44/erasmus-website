import React, { FC } from "react";

import { companies } from "@/assets/companies";
import CompanyCard from "./CompanyCard";
import Container from "@/components/Container";

interface Props {}

const CompaniesWrapper: FC<Props> = () => {
    return (
        <Container className="gap-8">
            <h2 className="text-3xl font-semibold text-blue-950">Companies</h2>

            <p className="max-w-2xl text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                natus nostrum amet iusto, expedita ipsa soluta, ea reprehenderit
                aspernatur velit eum saepe quis deleniti excepturi optio error
                quisquam! Itaque, adipisci.
            </p>

            <div>
                {companies.map((company) => (
                    <CompanyCard key={company.name} company={company} />
                ))}
            </div>
        </Container>
    );
};

export default CompaniesWrapper;
