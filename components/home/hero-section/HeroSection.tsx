import React from "react";

// import Blob from "@/components/home/hero-section/Blob";
import GeneratedDescription from "@/components/home/hero-section/GeneratedDescription";
import HeroTitle from "@/components/home/hero-section/HeroTitle";
import Container from "@/components/home/Container";
import ImagesGrid from "./ImagesGrid";

const HeroSection = () => {
    return (
        <Container className="py-16 flex justify-between lg:justify-center xl:justify-between flex-col lg:flex-row relative gap-16 lg:gap-8">
            <div className="flex flex-col">
                <HeroTitle
                    className="from-[#03045E] to-[#0077B6] py-1"
                    id="malaga"
                >
                    Malaga Erasmus+ Program
                </HeroTitle>
                <GeneratedDescription
                    className="text-muted-foreground mt-8 md:w-[66%] text-lg"
                    delay={0.05}
                >
                    Projekt Erasmus w Maladze był przełomowym doświadczeniem,
                    cechującym się rozwojem zawodowym, oraz głębokim zanurzeniem
                    w kulturze. Uczestnicy mieli okazję poznać hiszpańskie
                    tradycje, odbyć praktyki zawodowe i rozwijać cenne
                    umiejętności w otoczeniu pełnym życia i gościnności.
                </GeneratedDescription>
            </div>
            <ImagesGrid />
        </Container>
    );
};

export default HeroSection;
