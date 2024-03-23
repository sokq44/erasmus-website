import React, { FC } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

interface Props {}

const Navbar: FC<Props> = () => {
  return (
    <header className="py-6 bg-blue-700">
      <nav className="container relative mx-auto flex justify-between items-center">
        <Link
          href={"/"}
          className="group focus-visible:ring-1 ring-white transition duration-300 focus:ring-offset-2 focus:outline-none px-4 py-2 rounded-xl"
          tabIndex={0}
        >
          <h1 className="text-4xl text-white font-bold group-hover:text-blue-100 transition">
            Erasmus
          </h1>
        </Link>

        <div className="md:hidden">
          <MobileMenu />
        </div>

        <ul className="hidden md:flex gap-4">
          <li>
            <Link
              href="#companies"
              className="text-white hover:bg-blue-600 transition duration-300 px-2 py-1 rounded focus:outline-none focus-visible:ring-1 ring-white focus:ring-offset-2"
            >
              Companies
            </Link>
          </li>
          <li>
            <Link
              href="#testimonials"
              className="text-white hover:bg-blue-600 transition duration-300 px-2 py-1 rounded focus:outline-none focus-visible:ring-1 ring-white focus:ring-offset-2"
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
