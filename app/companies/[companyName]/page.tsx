import React, { FC } from "react";

import { notFound } from "next/navigation";

import CompanyHeader from "@/components/company/CompanyHeader";
import Container from "@/components/home/Container";

import { companies } from "@/assets/companies";
import CompanyDescription from "@/components/company/CompanyDescription";
import CompanyPhotos from "@/components/company/CompanyPhotos"; 
import { getFilesInDirectory } from "@/assets/get-images";

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
  const filePaths = await getFilesInDirectory(company?.slug);

  if (!company) return notFound();

  return (
    <Container className="relative">
      <CompanyHeader className={company.textColor} company={company} />
      <CompanyDescription>{company.description}</CompanyDescription>
      <CompanyPhotos company={company} filePaths={filePaths} ></CompanyPhotos>
    </Container>
  );
};

export default page;
