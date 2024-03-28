import React, { FC } from "react";

import { cn } from "@/lib/utils";

import Container from "../home/Container";

import { LayoutGrid } from "./LayoutGrid";
import type { Card } from "./LayoutGrid";

import type { Company } from "@/types/company";

interface Props {
  company: Company;
}

const photoCards: Card[] = [
  {
    id: 1,
    content: <div>cos</div>,
    className: "",
    thumbnail: "/companies-images/forja-roja/mr-beast.png",
  },
  {
    id: 2,
    content: <div>cos</div>,
    className: "",
    thumbnail: "/companies-images/forja-roja/mr-beast.png",
  },
  {
    id: 3,
    content: <div>cos</div>,
    className: "",
    thumbnail: "/companies-images/forja-roja/mr-beast.png",
  },
  {
    id: 4,
    content: <div>cos</div>,
    className: "",
    thumbnail: "/companies-images/forja-roja/mr-beast.png",
  },
  {
    id: 5,
    content: <div>cos</div>,
    className: "",
    thumbnail: "/companies-images/forja-roja/mr-beast.png",
  },
  {
    id: 6,
    content: <div>cos</div>,
    className: "",
    thumbnail: "/companies-images/forja-roja/mr-beast.png",
  },
  {
    id: 7,
    content: <div>cos</div>,
    className: "",
    thumbnail: "/companies-images/forja-roja/mr-beast.png",
  },
  {
    id: 8,
    content: <div>cos</div>,
    className: "",
    thumbnail: "/companies-images/forja-roja/mr-beast.png",
  },
  {
    id: 9,
    content: <div>cos</div>,
    className: "",
    thumbnail: "/companies-images/forja-roja/mr-beast.png",
  },
  {
    id: 10,
    content: <div>cos</div>,
    className: "",
    thumbnail: "/companies-images/forja-roja/mr-beast.png",
  },
  {
    id: 11,
    content: <div>cos</div>,
    className: "",
    thumbnail: "/companies-images/forja-roja/mr-beast.png",
  },
  {
    id: 12,
    content: <div>cos</div>,
    className: "",
    thumbnail: "/companies-images/forja-roja/mr-beast.png",
  },
];

const CompanyPhotos: FC<Props> = (props) => {
  const { company } = props;
  return (
    <Container className="mt-20">
      <span className={cn("text-4xl font-bold mx-auto", company.textColor)}>
        Zdjęcia
      </span>
      <LayoutGrid cards={photoCards}></LayoutGrid>
    </Container>
  );
};

export default CompanyPhotos;
