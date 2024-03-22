import React, { FC } from "react";

import { companies } from "@/assets/companies";
import CompanyCard from "./CompanyCard";
import Container from "@/components/Container";

interface Props {}

const CompaniesWrapper: FC<Props> = () => {
    return (
        <Container>
            <h2>Companies</h2>

            <p>
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
