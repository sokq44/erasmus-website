import React, { FC } from "react";
import Container from "@/components/home/Container";
import CertificatesImage from "./CertificatesImage";

interface Props {}

const Certificates: FC<Props> = () => {
    return (
        <Container
            className="gap-8 flex-col lg:flex-row justify-between"
            id="certificates"
        >
            <div>
                <h2
                    className="text-3xl font-semibold text-blue-950"
                    id="companies"
                >
                    Certyfikaty dla uczestników
                </h2>

                <p className="max-w-2xl text-muted-foreground mt-16">
                    Uczniowie odbywali praktyki w różnorodnych firmach,
                    starannie dobrane tak, aby zapewnić im cenne doświadczenie
                    zgodne z ich różnymi kierunkami nauczania. Firmy te
                    reprezentowały różne sektory i branże, umożliwiając uczniom
                    wszechstronny rozwój zawodowy.
                </p>
            </div>

            <CertificatesImage />
        </Container>
    );
};

export default Certificates;
