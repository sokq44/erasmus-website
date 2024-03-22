import * as Card from "@/components/ui/card";
import { Company } from "@/types/company";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
    company: Company;
    index: number;
    backgroundGradient: {
        from: string;
        to: string;
    };
}

const CompanyCard: FC<Props> = (props) => {
    return (
        <Link
            href={`/companies/${props.company.name}`}
            className={`group bg-transparent ${
                props.index % 2 === 1 ? "translate-y-16" : ""
            } `}
        >
            <div
                className={`group-hover:-translate-y-1 transition duration-300 bg-gradient-to-br ${props.backgroundGradient.from} ${props.backgroundGradient.to} p-3 rounded-xl`}
            >
                <Card.Card
                    className={`bg-background ${
                        props.index % 2 === 1 ? "row-start-2" : ""
                    }`}
                >
                    {/* TODO: Add displaying cards underneath the other ones here */}
                    <Card.CardHeader className="max-w-md">
                        <Card.CardTitle>{props.company.name}</Card.CardTitle>
                        <Card.CardDescription className="my-8">
                            {props.company.description}
                        </Card.CardDescription>
                    </Card.CardHeader>
                </Card.Card>
            </div>
        </Link>
    );
};

export default CompanyCard;
