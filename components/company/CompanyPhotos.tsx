"use client";

import React, { FC, useEffect, useState } from "react";

import type { Company } from "@/types/company";

import { motion } from "framer-motion";

import Container from "../home/Container";
import MainPhoto from "./MainPhoto";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SecondaryPhoto from "./SecondaryPhoto";

interface Props {
  company: Company;
  filePaths: string[];
}

const CompanyPhotos: FC<Props> = ({ filePaths }) => {
  const [selectedImageId, setSelectedImageId] = useState(0);
  const [images, setImages] = useState<{ id: number; src: string }[]>([]);

  useEffect(() => {
    const data = [];

    for (let i = 0; i < filePaths.length; i++) {
      data[i] = { id: i, src: filePaths[i] };
    }

    setImages(data);
  }, []);

  return (
    <Container className="mt-40">
      <span className="text-4xl font-bold mx-auto">Zdjęcia</span>
      {images.length > 0 && <MainPhoto img={images[selectedImageId]} />}
      <Carousel className="mx-auto w-[80%]">
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem
              key={`photo-${image.id}`}
              className="basis-1/2 md:basis-1/5 sm:basis-1/3"
              onClick={() => setSelectedImageId(image.id)}
            >
              <motion.div
                className="aspect-w-2 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 group relative"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
              >
                <SecondaryPhoto id={image.id} path={image.src} />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </Container>
  );
};

export default CompanyPhotos;
