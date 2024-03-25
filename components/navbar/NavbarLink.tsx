"use client";

import Link from "next/link";
import React, { FC } from "react";

import { motion } from "framer-motion";

export interface NavbarLinkProps {
    isOnMobile?: boolean;
    id: string;
    name: string;
    index: number;
}

const NavbarLink: FC<NavbarLinkProps> = (props) => {
    return (
        <motion.li
            className="w-full flex origin-center"
            initial={props.isOnMobile && { opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 * props.index }}
        >
            <Link
                href={`#${props.id}`}
                className={`${
                    props.isOnMobile ? "bg-blue-500 w-full text-center" : ""
                } text-white hover:bg-blue-600 transition duration-300 px-2 py-1 rounded focus:outline-none focus-visible:ring-1 ring-white focus:ring-offset-2`}
            >
                {props.name}
            </Link>
        </motion.li>
    );
};

export default NavbarLink;
