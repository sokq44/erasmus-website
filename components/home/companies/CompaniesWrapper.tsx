import React from "react";

import { companies } from "@/assets/companies";
import CompanyCard from "./CompanyCard";
import Container from "@/components/home/Container";
import Image from "next/image";

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
        <Container className="gap-16 md:gap-32 z-10" id="companies">
            <h2
                className="text-3xl font-semibold text-blue-950 text-center"
                id="companies"
            >
                Dobór firm kluczem do rozwoju na praktykach
            </h2>

            <div className="flex flex-col md:flex-row items-start justify-evenly gap-16">
                <p className="max-w-2xl text-muted-foreground">
                    Praktyki zawodowe stanowią integralną część edukacji,
                    oferując uczniom niepowtarzalną okazję do{" "}
                    <span className="font-bold">
                        zdobycia cennych doświadczeń
                    </span>{" "}
                    i umiejętności w realnym środowisku pracy. Aby
                    zmaksymalizować korzyści płynące z praktyk, kluczowy jest
                    staranny dobór firm, które zapewnią uczniom{" "}
                    <span className="font-bold">
                        optymalne warunki do rozwoju zawodowego
                    </span>
                    .
                </p>

                <Image
                    src={"/work-time.svg"}
                    alt="Forja Roja logo"
                    width={250}
                    height={100}
                    className="rounded-lg mx-auto md:mx-0"
                />
            </div>

            <div className="flex flex-col-reverse md:flex-row items-start justify-evenly gap-16">
                <Image
                    src={"/certificate.svg"}
                    alt="Forja Roja logo"
                    width={150}
                    height={100}
                    className="rounded-lg mx-auto md:mx-0"
                />

                <p className="max-w-2xl text-muted-foreground">
                    W przypadku omawianego projektu, uczniowie odbywali praktyki
                    w firmach{" "}
                    <span className="font-bold">celowo dobranych</span> pod
                    kątem ich{" "}
                    <span className="font-bold">kierunków nauczania</span>.
                    Oznacza to, że firmy te zostały wyselekcjonowane na
                    podstawie{" "}
                    <span className="font-bold">szczegółowej analizy</span> ich
                    profilu działalności, oferowanych stanowisk i możliwości
                    rozwoju, tak aby idealnie odpowiadać potrzebom i
                    oczekiwaniom uczniów.
                </p>
            </div>

            <h3 className="text-2xl font-semibold text-blue-950 text-center">
                Uczniowie odbyli praktyki w firmach takich jak:
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
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
