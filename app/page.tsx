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

const comapnies = [
    {
        name: "Forja Roja",
        // logo: ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit enim commodi, saepe quia dicta cumque laudantium minima sequi neque? Consequuntur delectus, autem tempore in ducimus explicabo a minus excepturi.",
    },
    {
        name: "Forja Roja",
        // logo: ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit enim commodi, saepe quia dicta cumque laudantium minima sequi neque? Consequuntur delectus, autem tempore in ducimus explicabo a minus excepturi.",
    },
    {
        name: "Forja Roja",
        // logo: ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit enim commodi, saepe quia dicta cumque laudantium minima sequi neque? Consequuntur delectus, autem tempore in ducimus explicabo a minus excepturi.",
    },
    {
        name: "Forja Roja",
        // logo: ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit enim commodi, saepe quia dicta cumque laudantium minima sequi neque? Consequuntur delectus, autem tempore in ducimus explicabo a minus excepturi.",
    },
    {
        name: "Forja Roja",
        // logo: ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit enim commodi, saepe quia dicta cumque laudantium minima sequi neque? Consequuntur delectus, autem tempore in ducimus explicabo a minus excepturi.",
    }
];

export default function Home() {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {comapnies.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
