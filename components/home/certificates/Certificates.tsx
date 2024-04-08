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
        <h2 className="text-3xl font-semibold text-blue-950" id="companies">
          Certyfikaty dla uczestników
        </h2>

        <p className="max-w-2xl text-muted-foreground mt-16">
          Certyfikaty stanowią rzetelne i klarowne potwierdzenie posiadanych
          umiejętności oraz doświadczenia. Są to ważne dokumenty, które świadczą
          o zaangażowaniu uczniów oraz ich zdolnościach zwłaszcza w kontekście
          praktyk zawodowych oferowanych przez naszą szkołę.
        </p>

        <p className="max-w-2xl text-muted-foreground mt-8">
          Każdy uczestnik otrzymał{" "}
          <span className="font-bold">
            {" "}
            certyfikat potwierdzający odbycie praktyk zawodowych
          </span>
          . Certyfikaty te są dowodem na zdobyte umiejętności i doświadczenie,
          które uczniowie mogą wykorzystać w przyszłej karierze zawodowej.
        </p>
      </div>

      <CertificatesImage />
    </Container>
  );
};

export default Certificates;
