"use client";

import React, { FC } from "react";

import { motion } from "framer-motion";
import { Company } from "@/types/company";

interface Props {
    company: Company;
}

const AnimatedTitle: FC<Props> = (props) => {
    return (
        <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
        >
            {props.company.name}
        </motion.h1>
    );
};

export default AnimatedTitle;
