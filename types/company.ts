export type Firm =
    | "forja-roja"
    | "microbit-servicio-tecnico"
    | "samsung-electronics"
    | "euromind"
    | "jc-valvuar-audio";

export type Company = {
    slug: Firm;
    name: string;
    imageSrc: string;
    imageScale: string;
    description: string;

    subpageDescription?: string[];
    website: string;

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
