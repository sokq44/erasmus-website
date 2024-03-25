import CompanyHeader from "@/components/company/CompanyHeader";
import React, { FC } from "react";

interface Props {
  params: { companyName: string };
}

const page: FC<Props> = (props) => {
  const { params } = props;

  return <CompanyHeader>{params.companyName}</CompanyHeader>;
};

export default page;
