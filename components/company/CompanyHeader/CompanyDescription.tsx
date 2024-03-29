"use client";

import React, { FC } from "react";

import { cn } from "@/lib/utils";

import { motion } from "framer-motion";

import Container from "@/components/home/Container";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const CompanyDescription: FC<Props> = (props) => {
  const { children, className } = props;

  return (
    <Container className={cn("py-0 px-[15%]", className)}>
      {children}
    </Container>
  );
};

export default CompanyDescription;
