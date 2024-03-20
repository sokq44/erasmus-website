import React, { FC } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

interface Props {}

const Navbar: FC<Props> = () => {
    return (
        <header className="py-6 bg-primary">
            <nav className="container relative mx-auto flex justify-between items-center">
                <Link href={"/forja-roja"} className="group">
                    <h1 className="text-4xl text-white font-bold group-hover:text-red-100 transition">
                        Erasmus
                    </h1>
                </Link>

                <MobileMenu className="md:hidden" />
            </nav>
        </header>
    );
};

export default Navbar;
