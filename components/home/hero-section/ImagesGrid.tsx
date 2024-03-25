"use client";

import { cn } from "@/lib/utils";
import React, { FC } from "react";

import { motion } from "framer-motion";

interface Props {}

const ImageRect = ({
    className,
    index,
}: {
    className: string;
    index: number;
}) => {
    return (
        <motion.div
            className={cn("rounded-xl origin-center", className)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * index }}
        />
    );
};

const images: { className: string }[] = [
    {
        className: "bg-green-500 col-span-4",
    },
    {
        className: "bg-blue-500 col-span-2",
    },
    {
        className: "bg-red-500 col-span-2",
    },
    {
        className: "bg-yellow-500 col-span-4",
    },
];

const ImagesGrid: FC<Props> = () => {
    return (
        <div className="grid grid-cols-6 gap-x-8 gap-y-4 w-full lg:min-w-[32rem] xl:min-w-[36rem] min-h-64">
            {images.map((image, index) => (
                <ImageRect
                    key={index}
                    className={image.className}
                    index={index}
                />
            ))}
        </div>
    );
};

export default ImagesGrid;
