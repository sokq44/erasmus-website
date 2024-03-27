"use client";

import React, { FC, useState, useEffect } from "react";

import { cn } from "@/lib/utils";

import Container from "../home/Container";

import type { Company } from "@/types/company";

import Image from "next/image";

interface Props {
  company: Company;
  filePaths: string[];
}

const CompanyPhotos: FC<Props> = (props) => {
  const { company, filePaths } = props;

  return (
    <Container>
      <span className={cn("text-4xl font-bold mx-auto", company.textColor)}>
        Zdjęcia
      </span>
      <div className="mt-8 p-10 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filePaths.map((path, i) => (
          <CompanyImage key={i} path={path} />
        ))}
      </div>
    </Container>
  );
};

function CompanyImage({ path }: { path: string }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href="#" className="group">
      <div className="aspect-w-2 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-7">
        <Image
          alt=""
          src="/companies-images/forja-roja/mr-beast.png"
          layout="fill"
          objectFit="cover"
          className={cn(
            "duration-700 ease-in-out group-hover:opacity-75",
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </a>
  );
}

export default CompanyPhotos;
