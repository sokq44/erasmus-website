"use client";

import React from "react";

import CompaniesWrapper from "@/components/home/companies/CompaniesWrapper";
import HeroSection from "@/components/home/hero-section/HeroSection";
import Testimonials from "@/components/home/testimonials/Testimonials";
import Certificates from "@/components/home/certificates/Certificates";

("text-red-600");
("text-green-600");
("text-blue-600");
("text-blue-600");
("text-black");

export default function Home() {
    return (
        <>
            <HeroSection />
            <CompaniesWrapper />
            <Certificates />
            <Testimonials />
        </>
    );
}
