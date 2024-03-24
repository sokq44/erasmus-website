import React, { FC } from "react";
import CompanyHeader from "../CompanyHeader";
import CompanyDescription from "../CompanyDescription";

interface Props {}

const page: FC<Props> = (props) => {
  return (
    <>
      <CompanyHeader className="text-red-700">Forja Roja</CompanyHeader>
      <CompanyDescription>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit autem
        repellendus explicabo quisquam consectetur voluptate repellat eligendi,
        voluptates minima hic sunt omnis reiciendis eius soluta sapiente sed
        illo amet pariatur?
      </CompanyDescription>
    </>
  );
};

export default page;
