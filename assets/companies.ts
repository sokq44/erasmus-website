import type { Company } from "@/types/company";

export const companies: Company[] = [
    {
        name: "Forja Roja",
        imageSrc: "https://via.placeholder.com/150",
        description:
            "Forja Roja is a software development company that specializes in mobile game development and 3D modelling.",
        address: {
            country: "Spain",
            city: "Malaga",
            street: "Street 1",
            number: "1",
        },

        backgroundGradient: {
            from: "from-red-500",
            to: "to-orange-500",
        },
    },
    {
        name: "Company 2",
        description: "Description for company 2",
        address: {
            country: "Country 2",
            city: "City 2",
            street: "Street 2",
            number: "2",
        },

        backgroundGradient: {
            from: "from-green-500",
            to: "to-blue-500",
        },
    },
];
