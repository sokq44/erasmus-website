"use client";

import React from "react";

import { motion } from "framer-motion";

export default function Home() {
    return (
        <motion.h2
            className="text-3xl font-semibold"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            Hello World!
        </motion.h2>
    );
}
