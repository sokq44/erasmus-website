import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Container from "@/components/home/Container";

const Testimonials = () => {
  return (
    <Container shouldAnimate={false}>
      <h2 className="text-3xl font-semibold text-blue-950 m-auto">
        Testimonials
      </h2>
      <Carousel className="m-auto mt-10 w-[80%]">
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2 drop-shadow-[3px_3px_1px_rgba(3,4,94,1)]">
              <div className="p-1">
                <Card className="">
                  <CardHeader>
                    <div className="flex items-stretch">
                      <span className="text-3xl font-semibold">Name</span>
                      <Avatar className="ml-auto size-[30%]">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                  </CardHeader>
                  <CardContent className="flex items-center">
                    <span className="text-1xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum, itaque alias? Nihil nulla placeat, recusandae
                      explicabo odio sequi eaque amet reiciendis necessitatibus
                      minus illum maxime tenetur maiores iusto ex! Quod.
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
};

export default Testimonials;
