import { Company } from "@/types/company";
import React, { FC } from "react";

interface Props {
    company: Company;
}

const CompanyCard: FC<Props> = (props) => {
    console.log(props.company);

    return (
        <div>
            <p>{props.company.name}</p>
        </div>
    );
};

export default CompanyCard;
