import React from "react";

// import Blob from "@/components/home/hero-section/Blob";
import GeneratedDescription from "@/components/home/hero-section/GeneratedDescription";
import HeroTitle from "@/components/home/hero-section/HeroTitle";
import Container from "@/components/home/Container";
import ImagesGrid from "./ImagesGrid";

const HeroSection = () => {
    return (
        <Container className="py-0 flex justify-between lg:justify-center xl:justify-between flex-col lg:flex-row relative gap-16 lg:gap-8">
            <div className="flex flex-col">
                <HeroTitle
                    className="from-[#03045E] to-[#0077B6] py-1"
                    id="malaga"
                >
                    Malaga Erasmus Program
                </HeroTitle>
                <GeneratedDescription
                    className="text-muted-foreground mt-8 md:w-[66%] text-lg"
                    delay={0.05}
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Earum voluptatibus ea officia illo doloribus. Sunt possimus
                    quidem doloribus quia voluptatibus sit, veniam ex dicta
                    nulla temporibus, praesentium, voluptates ea ad!
                </GeneratedDescription>
            </div>

            {/* <Blob className="-translate-y-20 translate-x-[150%] -z-10 w-[35%] absolute" /> */}

            <ImagesGrid />
        </Container>
    );
};

export default HeroSection;
