import React, { FC } from "react";

import { notFound } from "next/navigation";

import CompanyHeader from "@/components/company/CompanyHeader/CompanyHeader";
import Container from "@/components/home/Container";

import { companies } from "@/assets/companies";
import CompanyPhotos from "@/components/company/CompanyPhotos/CompanyPhotos";
import CompanyLogo from "@/components/company/CompanyLogo";

interface Props {
  params: { companyName: string };
}

export async function generateMetadata(props: Props) {
  const company = companies.find((e) => e.slug === props.params.companyName);

  if (!company) return notFound();

  return {
    title: `Erasmus - ${company.name}`,
    description: company.description,
  };
}

const page: FC<Props> = async (props) => {
  const company = companies.find((e) => e.slug === props.params.companyName);

  if (!company) return notFound();

  return (
    <Container className="relative">
      <CompanyHeader className={company.textColor} company={company} />
      <CompanyLogo company={company} />
      <CompanyPhotos company={company}></CompanyPhotos>
    </Container>
  );
};

export default page;
