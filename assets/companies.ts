import type { Company } from "@/types/company";

export const companies: Company[] = [
    {
        name: "Forja Roja",
        imageSrc: "https://via.placeholder.com/150",
        description:
            "Forja Roja to firma z siedzibą w Maladze, specjalizująca się w tworzeniu gier wideo i modelowaniu 3D. Forja Roja współpracuje z programem Erasmus+, oferując praktyki dla studentów z całej Europy.",
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

        href: "forja-roja",
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

        href: "company-2",
    },

    {
        name: "Company 3",
        description: "Description for company 3",
        address: {
            country: "Country 3",
            city: "City 3",
            street: "Street 3",
            number: "3",
        },

        backgroundGradient: {
            from: "from-yellow-500",
            to: "to-amber-500",
        },

        href: "company-3",
    },

    {
        name: "Company 4",
        description: "Description for company 4",
        address: {
            country: "Country 4",
            city: "City 4",
            street: "Street 4",
            number: "4",
        },

        backgroundGradient: {
            from: "from-pink-500",
            to: "to-purple-500",
        },

        href: "company-4",
    },

    {
        name: "Company 5",
        description: "Description for company 5",
        address: {
            country: "Country 5",
            city: "City 5",
            street: "Street 5",
            number: "5",
        },

        backgroundGradient: {
            from: "from-teal-500",
            to: "to-cyan-500",
        },

        href: "company-5",
    },
];
