import type { Company } from "@/types/company";

export const companies: Company[] = [
  {
    slug: "forja-roja",
    name: "Forja Roja",
    imageSrc: "https://via.placeholder.com/150",
    description:
      "Forja Roja to firma z siedzibą w Maladze, specjalizująca się w tworzeniu gier wideo i modelowaniu 3D. Forja Roja oferuje praktyki dla studentów z całej Europy.",
    textColor: "text-red-600",
    caretColor: "bg-red-600",
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
    slug: "microbit-servicio-tecnico",
    name: "Microbit Servicio Tecnico",
    description:
      "Microbit Servicio Tecnico to firma z siedzibą w Maladze, specjalizująca się w naprawie sprzętu elektronicznego. Firma oferuje praktyki dla studentów z programu Erasmus+.",
    textColor: "text-green-600",
    caretColor: "bg-green-600",
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

    href: "microbit-servicio-tecnico",
  },
  {
    slug: "samsung-electronics",
    name: "Samsung Electronics",
    description:
      "Samsung Electronics to firma z siedzibą w Seulu, specjalizująca się w produkcji elektroniki. Firma oferuje praktyki dla studentów z programu Erasmus+.",
    textColor: "text-blue-600",
    caretColor: "bg-blue-600",
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

    href: "samsung-electronics",
  },
  {
    slug: "euromind",
    name: "EuroMind",
    description:
      "EuroMind to firma z siedzibą w Maladze, specjalizująca się w organizacji praktyk zawodowych dla studentów z programu Erasmus+.",
    caretColor: "bg-blue-600",
    textColor: "text-blue-600",
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

    href: "euromind",
  },
  {
    slug: "jc-valvuar-audio",
    name: "JC VALVUAR AUDIO",
    description:
      "JC VALVUAR AUDIO to firma z siedzibą w Maladze, specjalizująca się w produkcji wzmacniaczy gitarowych. Firma oferuje praktyki dla studentów z programu Erasmus+.",
    textColor: "text-black",
    caretColor: "bg-black",
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

    href: "jc-valvuar-audio",
  },
];
