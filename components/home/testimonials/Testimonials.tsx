import React, { FC } from "react";

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

interface Props {}

const Testimonials: FC<Props> = (props) => {
  return (
    <Container shouldAnimate={false}>
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardHeader>
                    <div className="flex items-stretch">
                      <span className="text-3xl">Name</span>
                      <Avatar className="ml-auto size-[25%]">
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
      </Carousel>
    </Container>
  );
};

export default Testimonials;
