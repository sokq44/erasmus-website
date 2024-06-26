"use client";

import * as Card from "@/components/ui/card";
import { Company } from "@/types/company";
import Link from "next/link";
import React, { FC } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
    company: Company;
    index: number;
    backgroundGradient: {
        from: string;
        to: string;
        ring: string;
    };
}

const CompanyCard: FC<Props> = (props) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { margin: "300px 0px 0px 0px", once: true });

    return (
        <Link
            href={`/companies/${props.company.href}`}
            className={`group bg-transparent ${
                props.index % 2 === 1 ? "lg:translate-y-16" : ""
            } focus-visible:outline-none focus-visible:ring-4 ${
                props.backgroundGradient.ring
            } focus-visible:ring-offset-4 transition duration-300 rounded-xl `}
        >
            <motion.div ref={ref} whileHover={{ y: -5 }}>
                <motion.div
                    className={`group-hover:-translate-y-1 transition duration-300 bg-gradient-to-br ${props.backgroundGradient.from} ${props.backgroundGradient.to} p-3 rounded-xl`}
                    initial={
                        props.index % 2 === 1
                            ? { x: -1000, opacity: 0 }
                            : { x: -1000, opacity: 0 }
                    }
                    animate={
                        inView
                            ? { x: 0, opacity: 1 }
                            : {
                                  x: props.index % 2 === 0 ? -1000 : 1000,
                                  opacity: 0,
                              }
                    }
                    transition={{ duration: 0.2 }}
                >
                    <Card.Card>
                        <Card.CardHeader className="flex flex-col gap-4">
                            <Card.CardTitle>
                                {props.company.name}
                            </Card.CardTitle>
                            <Card.CardDescription className="my-8 max-w-md">
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
