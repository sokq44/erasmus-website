import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Testimonial } from "@/types/testimonial";
import React, { FC } from "react";

interface Props {
    testimonial: Testimonial;
}

const TestimonialCard: FC<Props> = (props) => {
    const { testimonial } = props;

    return (
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 drop-shadow-[1px_1px_1px_rgba(0,180,216,1)] py-2">
            <Card className="h-full">
                <CardHeader>
                    <div className="flex items-stretch">
                        <div>
                            <CardTitle className="text-3xl font-semibold">
                                {testimonial.name}
                            </CardTitle>
                            <CardDescription className=" mt-1">
                                Technik {testimonial.profile}
                            </CardDescription>
                        </div>
                        <Avatar className="ml-auto size-[30%] drop-shadow-[1px_1px_1px_rgba(0,180,216,1)]">
                            <AvatarImage
                                src={testimonial.img}
                                alt="Some random desc"
                            />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                    </div>
                </CardHeader>
                <CardContent className="flex items-center">
                    <blockquote className="relative before:absolute before:bg-secondary before:w-2 before:-left-4 ml-1 before:h-4/6 before:rounded-full italic">
                        {testimonial.testimonial}
                    </blockquote>
                </CardContent>
            </Card>
        </CarouselItem>
    );
};

export default TestimonialCard;
