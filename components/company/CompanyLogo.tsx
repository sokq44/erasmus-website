import { Company } from "@/types/company";
import React, { FC } from "react";
import Container from "@/components/Container";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  company: Company;
}

const scales = {
    "forja-roja": "scale-75 my-20",
    "euromind": "scale-50",
    "jc-valvuar-audio": "scale-100 my-20",
    "microbit-servicio-tecnico": "scale-100 my-20",
    "samsung-electronics": "scale-75",
}

const CompanyLogo: FC<Props> = (props) => {
  const { company } = props;

  return (
    <Container className="mt-20 mb-0">
      <Image
        className={cn("mx-auto rounded-xl", scales[company.slug])}
        src={company.imageSrc}
        alt="Logo firmy"
        width={500}
        height={500}
      />
    </Container>
  );
};

export default CompanyLogo;
