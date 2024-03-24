"use client";

import { cn } from "@/lib/utils";
import React, { FC } from "react";

import { motion } from "framer-motion";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    shouldAnimate?: boolean;
}

const Container: FC<Props> = (props) => {
    return props.shouldAnimate ? (
        <motion.section
            className={cn("py-20 flex flex-col", props.className)}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.15 }}
        >
            {props.children}
        </motion.section>
    ) : (
        <section className={cn("py-20 flex flex-col", props.className)}>
            {props.children}
        </section>
    );
};

export default Container;
