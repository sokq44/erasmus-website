"use client";

import { cn } from "@/lib/utils";
import React, { FC } from "react";

import { motion } from "framer-motion";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const Container: FC<Props> = (props) => {
    return (
        <motion.section
            className={cn("my-24 flex flex-col", props.className)}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.15 }}
            id={`#${props.id}`}
        >
            {props.children}
        </motion.section>
    );
};

export default Container;
