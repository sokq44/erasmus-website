import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Company = {
    slug: "forja-roja" | "microbit-servicio-tecnico" | "samsung-electronics" | "euromind" | "jc-valvuar-audio";
    name: string;
    imageSrc: string;
    imageScale: string;
    description: string;

    textColor: string;
    caretColor: string;

    href: string;

    address: {
        country: string;
        city: string;
        street: string;
        number: string;
    };

    backgroundGradient: {
        from: string;
        to: string;
    };
};