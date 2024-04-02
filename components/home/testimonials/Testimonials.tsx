import React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import Container from "@/components/home/Container";

import { testimonials } from "@/assets/testimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    return (
        <Container shouldAnimate={false}>
            <h2
                id="testimonials"
                className="text-3xl font-semibold text-blue-950 mx-auto text-center"
            >
                Relacje uczniów
            </h2>

            <p className="max-w-2xl text-muted-foreground mx-auto text-left md:text-center mt-16">
                Przeczytaj, co uczestnicy projektu mówią o swoich
                doświadczeniach w Maladze! To więcej niż tylko słowa - to
                prawdziwe historie o odwadze, odkryciach i rozwoju osobistym.
                Poznaj ich perspektywę na niezapomniane chwile spędzone za
                granicą i zobacz, jakie korzyści przyniosły im praktyki!
            </p>

            <Carousel className="m-auto mt-24 w-[80%]">
                <CarouselContent className="px-2 py-1">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            testimonial={testimonial}
                        />
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </Container>
    );
};

export default Testimonials;
