export type Company = {
    name: string;
    imageSrc?: string;
    description: string;

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
