export type Company = {
    slug: string;
    name: string;
    imageSrc?: string;
    description: string;

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
