import React, { FC } from "react";

import Blob from "@/components/home/hero-section/Blob";
import GeneratedDescription from "@/components/home/hero-section/GeneratedDescription";
import HeroTitle from "@/components/home/hero-section/HeroTitle";
import Container from "@/components/home/Container";

interface Props {}

const HeroSection: FC<Props> = (props) => {
  return (
      <Container className="pt-2">
        <HeroTitle className="from-[#03045E] to-[#0077B6]">
          Malaga Erasmus Program
        </HeroTitle>
        <GeneratedDescription
          className="text-muted-foreground mt-5 w-[66%]"
          delay={0.05}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          voluptatibus ea officia illo doloribus. Sunt possimus quidem doloribus
          quia voluptatibus sit, veniam ex dicta nulla temporibus, praesentium,
          voluptates ea ad!
        </GeneratedDescription>
        <Blob className="-translate-y-20 translate-x-[150%] -z-10 w-[35%] absolute" />
      </Container>
  );
};

export default HeroSection;
