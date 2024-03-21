"use client";

import React from "react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { motion } from "framer-motion";

const companies = [
    {
        name: "Company",
        // logo: ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit enim commodi, saepe quia dicta cumque laudantium minima sequi neque? Consequuntur delectus, autem tempore in ducimus explicabo a minus excepturi.",
    },
    {
        name: "Company",
        // logo: ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit enim commodi, saepe quia dicta cumque laudantium minima sequi neque? Consequuntur delectus, autem tempore in ducimus explicabo a minus excepturi.",
    },
    {
        name: "Company",
        // logo: ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit enim commodi, saepe quia dicta cumque laudantium minima sequi neque? Consequuntur delectus, autem tempore in ducimus explicabo a minus excepturi.",
    },
    {
        name: "Company",
        // logo: ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit enim commodi, saepe quia dicta cumque laudantium minima sequi neque? Consequuntur delectus, autem tempore in ducimus explicabo a minus excepturi.",
    },
    {
        name: "Company",
        // logo: ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit enim commodi, saepe quia dicta cumque laudantium minima sequi neque? Consequuntur delectus, autem tempore in ducimus explicabo a minus excepturi.",
    }
];

export default function Home() {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {companies.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <motion.div className="p-1" initial={{y: 1000}} animate={{y: 0}} transition={{delay: index * 0.1}}>
              <Card>
                <CardHeader>
                    <CardTitle>{`${item.name} ${index + 1}`}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
