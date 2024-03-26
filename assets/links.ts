import { NavbarLinkProps } from "@/components/navbar/NavbarLink";

export const links: Omit<NavbarLinkProps, "index">[] = [
    { id: "companies", name: "Companies" },
    { id: "testimonials", name: "Testimonials" },
];
