"use client";

import React, { FC, useState } from "react";

import { cn } from "@/lib/utils";

import Container from "../home/Container";

import type { Company } from "@/types/company";
import Image from "next/image";

interface Props {
  company: Company;
}

type CompanyImage = {
  id: number;
  imageSrc: string;
  name: string;
};

const images: CompanyImage[] = [
  {
    id: 1,
    imageSrc: "/companies-images/forja-roja/mr-beast.png",
    name: "1",
  },
  {
    id: 2,
    imageSrc: "/companies-images/forja-roja/mr-beast.png",
    name: "1",
  },
  {
    id: 3,
    imageSrc: "/companies-images/forja-roja/mr-beast.png",
    name: "1",
  },
  {
    id: 4,
    imageSrc: "/companies-images/forja-roja/mr-beast.png",
    name: "1",
  },
  {
    id: 5,
    imageSrc: "/companies-images/forja-roja/mr-beast.png",
    name: "1",
  },
  {
    id: 6,
    imageSrc: "/companies-images/forja-roja/mr-beast.png",
    name: "1",
  },
  {
    id: 7,
    imageSrc: "/companies-images/forja-roja/mr-beast.png",
    name: "1",
  },
  {
    id: 8,
    imageSrc: "/companies-images/forja-roja/mr-beast.png",
    name: "1",
  },
  {
    id: 9,
    imageSrc: "/companies-images/forja-roja/mr-beast.png",
    name: "1",
  },
  {
    id: 10,
    imageSrc: "/companies-images/forja-roja/mr-beast.png",
    name: "1",
  },
];

const CompanyPhotos: FC<Props> = (props) => {
  const { company } = props;
  return (
    <Container className="mt-10">
      <span className={cn("text-4xl font-bold mx-auto", company.textColor)}>
        Zdjęcia
      </span>
      <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image, _) => (
            <CompanyImage key={image.id} image={image} />
          ))}
        </div>
      </div>
    </Container>
  );
};

function CompanyImage({ image }: { image: CompanyImage }) {
  return (
    <a href="#" className="group">
      <div className="aspect-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img src={image.imageSrc} className="group-hover:opacity-75" />
      </div>
    </a>
  );
}

export default CompanyPhotos;
