"use client";

import CompaniesWrapper from "@/components/home/companies/CompaniesWrapper";
import HeroSection from "@/components/home/hero-section/HeroSection";
import React from "react";

export default function Home() {
    return (
        <>
            <HeroSection />
            <CompaniesWrapper />
        </>
    );
}
