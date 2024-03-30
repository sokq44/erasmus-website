import React from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Container from "@/components/home/Container";

import { testimonials } from "@/assets/testimonials";

const Testimonials = () => {
    return (
        <Container shouldAnimate={false} className="mb-20">
            <h2
                id="testimonials"
                className="text-3xl font-semibold text-blue-950 mx-auto text-center"
            >
                Świadectwa uczestników
            </h2>
            <Carousel className="m-auto pt-10 w-[80%]">
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem
                            key={index}
                            className="lg:basis-1/3 md:basis-1/2 drop-shadow-[1px_1px_1px_rgba(0,180,216,1)]"
                        >
                            <div className="p-1">
                                <Card>
                                    <CardHeader>
                                        <div className="flex items-stretch">
                                            <div>
                                                <CardTitle className="text-3xl font-semibold">
                                                    {testimonial.name}
                                                </CardTitle>
                                                <CardDescription className="mt-1">
                                                    Technik{" "}
                                                    {testimonial.profile}
                                                </CardDescription>
                                            </div>
                                            <Avatar className="ml-auto size-[30%] drop-shadow-[1px_1px_1px_rgba(0,180,216,1)]">
                                                <AvatarImage
                                                    src={testimonial.img}
                                                    alt="Some random desc"
                                                />
                                                <AvatarFallback>
                                                    U
                                                </AvatarFallback>
                                            </Avatar>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex items-center">
                                        <span className="text-1xl">
                                            {testimonial.testimonial}
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
