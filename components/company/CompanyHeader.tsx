import React, { FC } from "react";

import { cn } from "@/lib/utils";

import Container from "@/components/home/Container";

import { TypewriterEffectSmooth } from "../ui/typewritter-effect";

import { Company } from "@/types/company";

interface Props {
  className?: string;
  company: Company;
}

const textColors =  {
  "forja-roja": "text-red-600",
  "microbit-servicio-tecnico": "text-green-600",
  "samsung-electronics": "text-blue-600",
  "euromind": "text-blue-600",
  "jc-valvuar-audio": "text-black",
}

const bgColors =  {
  "forja-roja": "bg-red-600",
  "microbit-servicio-tecnico": "bg-green-600",
  "samsung-electronics": "bg-blue-600",
  "euromind": "bg-blue-600",
  "jc-valvuar-audio": "bg-black",
}

const CompanyHeader: FC<Props> = (props) => {
  const { className, company } = props;

  const words = [
    {
      text: company.name,
    },
  ];

  return (
    <Container
      className={cn(
        "text-5xl text-center font-bold mx-auto capitalize pb-10 pt-1",
        className
      )}
    >
      <TypewriterEffectSmooth
        words={words}
        cursorClassName={bgColors[company.slug]}
      />
    </Container>
  );
};

export default CompanyHeader;
