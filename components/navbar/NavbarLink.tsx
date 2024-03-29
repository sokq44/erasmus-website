"use client";

import Link from "next/link";
import React, { FC } from "react";

import { motion } from "framer-motion";
import { SheetTrigger } from "../ui/sheet";
import { cn } from "@/lib/utils";

export interface NavbarLinkProps
    extends React.HTMLAttributes<HTMLAnchorElement> {
    isOnMobile?: boolean;
    href: string;
    name: string;
    index: number;
    children?: React.ReactNode;
}

function LinkItem(props: NavbarLinkProps) {
    return (
        <Link
            href={`${props.href}`}
            className={cn(
                `${
                    props.isOnMobile ? "bg-blue-500 w-full text-center" : ""
                } text-white hover:bg-blue-600 transition duration-300 px-4 py-3 rounded focus:outline-none focus-visible:ring-1 ring-white focus:ring-offset-2 text-center`,
                props.className
            )}
        >
            {props.children || props.name}
        </Link>
    );
}

const NavbarLink: FC<NavbarLinkProps> = (props) => {
    return (
        <motion.li
            className="w-full flex origin-center"
            initial={props.isOnMobile && { opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 * props.index }}
        >
            {props.isOnMobile ? (
                <LinkItem {...props} className="w-full text-center">
                    <SheetTrigger>{props.name}</SheetTrigger>
                </LinkItem>
            ) : (
                <LinkItem {...props} />
            )}
        </motion.li>
    );
};

export default NavbarLink;
