import React, { FC } from "react";

import { cn } from "@/lib/utils";

import Container from '@/components/home/Container'

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const CompanyHeader: FC<Props> = (props) => {
  const { children, className } = props;

  return <Container className={cn("text-3xl text-center font-bold mx-auto capitalize py-10", className)}><h1>{children}</h1></Container>;
};

export default CompanyHeader;
