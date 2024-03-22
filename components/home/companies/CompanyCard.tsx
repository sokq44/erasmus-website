"use client";

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

import { motion } from "framer-motion";

const CompanyCard: FC<Props> = (props) => {
    return (
        <Link
            href={`/companies/${props.company.name}`}
            className={`group bg-transparent ${
                props.index % 2 === 1 ? "translate-y-16" : ""
            } `}
        >
            <motion.div whileHover={{ y: -5 }}>
                <motion.div
                    className={`group-hover:-translate-y-1 transition duration-300 bg-gradient-to-br ${props.backgroundGradient.from} ${props.backgroundGradient.to} p-3 rounded-xl`}
                    initial={
                        props.index % 2 === 1
                            ? { x: 1000, opacity: 0 }
                            : { x: -1000, opacity: 0 }
                    }
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.15, delay: 0.15 * props.index }}
                >
                    <Card.Card>
                        <Card.CardHeader className="max-w-md">
                            <Card.CardTitle>
                                {props.company.name}
                            </Card.CardTitle>
                            <Card.CardDescription className="my-8">
                                {props.company.description}
                            </Card.CardDescription>
                        </Card.CardHeader>
                    </Card.Card>
                </motion.div>
            </motion.div>
        </Link>
    );
};

export default CompanyCard;
