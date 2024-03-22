import React, { FC } from 'react'
import GeneratedDescription from "@/components/home/hero-section/GeneratedDescription";
import HeroTitle from "@/components/home/hero-section/HeroTitle";

interface Props {

}

const HeroSection: FC<Props> = (props) => {
  return (
    <>
      <HeroTitle className="from-[#03045E] to-[#0077B6]">Malaga Erasmus Program</HeroTitle>
      <GeneratedDescription className="text-muted-foreground" delay={0.15}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum voluptatibus ea officia illo doloribus. Sunt possimus quidem doloribus quia voluptatibus sit, veniam ex dicta nulla temporibus, praesentium, voluptates ea ad!</GeneratedDescription>
    </>
  )
}

export default HeroSection
