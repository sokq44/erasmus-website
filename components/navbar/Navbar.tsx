import React, { FC } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavbarContent from "./NavbarContent";

interface Props {}

const Navbar: FC<Props> = () => {
    return (
        <header className="py-6 bg-blue-700">
            <nav className="container relative mx-auto flex justify-between items-center">
                <Link className="sr-only text-white" href={"#malaga"}>
                    Skip to content
                </Link>

                <Link
                    href={"/"}
                    className=" text-4xl text-white font-bold px-4 py-2 rounded-xl hover:text-blue-100 transition duration-300 focus-visible:ring-1 ring-white focus:ring-offset-2 focus:outline-none"
                    tabIndex={0}
                >
                    Erasmus
                </Link>

                <div className="md:hidden">
                    <MobileMenu />
                </div>

                <NavbarContent className="hidden md:flex" />
            </nav>
        </header>
    );
};

export default Navbar;
