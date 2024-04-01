"use client";

import { Company } from "@/types/company";
import React, { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
    company: Company;
}

const scales = {
    "forja-roja": "scale-75 my-20",
    euromind: "scale-50",
    "jc-valvuar-audio": "scale-100 my-20",
    "microbit-servicio-tecnico": "scale-100 my-20",
    "samsung-electronics": "scale-75",
};

const CompanyLogo: FC<Props> = (props) => {
    const { company } = props;
    const [loaded, setLoaded] = React.useState(false);

    return (
        <Link
            href={company.website}
            className="border border-secondary-muted self-center mt-16 hover:bg-muted transition duration-500 rounded-xl p-4"
            target="_blank"
        >
            <Image
                className={cn(
                    "mx-auto rounded-xl",
                    scales[company.slug],
                    loaded ? "blur-none" : "blur-xl"
                )}
                src={company.imageSrc}
                alt="Logo firmy"
                width={500}
                height={500}
                onLoad={() => setLoaded(true)}
            />
        </Link>
    );
};

export default CompanyLogo;
