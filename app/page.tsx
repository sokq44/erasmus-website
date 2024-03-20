"use client";

import React from "react";

import { motion } from "framer-motion";

export default function Home() {
    return (
        <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-4 py-2 rounded border border-muted"
        >
            <h2 className="text-3xl font-semibold">Hello World!</h2>
        </motion.div>
    );
}
