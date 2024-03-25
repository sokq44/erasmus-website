"use client";

import React from "react";

import CompaniesWrapper from "@/components/home/companies/CompaniesWrapper";
import HeroSection from "@/components/home/hero-section/HeroSection";
import Testimonials from "@/components/home/testimonials/Testimonials";
import Footer from "@/components/home/footer/Footer";

export default function Home() {
    return (
        <>
            <HeroSection />
            <CompaniesWrapper />
            <Testimonials />
        </>
    );
}
