import type { Company } from "@/types/company";

export const companies: Company[] = [
  {
    slug: "forja-roja",
    name: "Forja Roja",
    imageSrc: "/companies-logos/forja-roja.png",
    imageScale: "scale-75",
    description:
      "Forja Roja to firma z siedzibą w Maladze, specjalizująca się w tworzeniu gier wideo i modelowaniu 3D. Forja Roja oferuje praktyki dla studentów z całej Europy.",
    subpageDescription: [
      "Na praktykach zawodowych w tej firmie nasi uczniowie poznawanie proces tworzenia gier wideo i modelowania 3D.",
      "Przez pierwsze 2 tygodnie zagłębiali się oni w świat Game Development'u i poznawali podstawy programowania w Unity. Głównym zadaniem było stworzenie gry wideo 2D typu Platformer, w której to użytkownik wciela się w różne postacie i pokonuje przeszkody próbując dojść do celu.",
      "W kolejnym tygodniu uczniowie poznawali tajniki modelowania 3D w Blenderze. Ich zadaniem było stworzenie własnego modelu 3D, który następnie został wydrukowany na drukarce 3D. Praktyka zawodowa odbywała się w języku angielskim oraz hiszpańskim, co pozwoliło uczniom na doskonalenie swoich umiejętności językowych.",
    ],
    textColor: "text-red-600",
    caretColor: "bg-red-600",
    website: "https://forjaroja.com",
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
    slug: "euromind",
    name: "iDevelop",
    imageSrc: "/companies-logos/idevelop.png",
    imageScale: "scale-25",
    description:
      "Idevelop to firma z siedzibą w Maladze, specjalizująca się w organizacji praktyk zawodowych dla studentów z programu Erasmus+.",
    subpageDescription: [
      "W tej firmie nasi uczniowie poznawali tajniki tworzenia stron internetowych oraz konfiguracji sprzętu komputerowego dla innych praktykantów.",
      "Pierwszym ich zadaniem było stworzenie sklepu internetowego za pomocą oprogramowania WordPress.",
      "Drugim - konfiguracja sprzętu komputerowego polegająca na przygotowaniu środowiska pracy dla niektórych praktykantów. Praktyka zawodowa odbywała się w języku angielskim oraz hiszpańskim, co pozwoliło uczniom na doskonalenie swoich umiejętności językowych.",
    ],
    caretColor: "bg-blue-600",
    textColor: "text-orange-600",
    address: {
      country: "Country 4",
      city: "City 4",
      street: "Street 4",
      number: "4",
    },

    website: "https://web.idevelopcourses.com",

    backgroundGradient: {
      from: "from-pink-500",
      to: "to-purple-500",
    },

    href: "euromind",
  },
  {
    slug: "microbit-servicio-tecnico",
    name: "Microbit Servicio Tecnico",
    imageSrc: "/companies-logos/microbit.jpg",
    imageScale: "scale-x-100 scale-y-100",
    description:
      "Microbit Servicio Tecnico to firma z siedzibą w Maladze, specjalizująca się w naprawie sprzętu elektronicznego. Firma oferuje praktyki dla studentów z programu Erasmus+.",
    subpageDescription: [
      "W tej firmie nasi uczniowie poznawali tajniki naprawy oraz konfiguracji sprzętu elektronicznego.",
      "Spotkali się oni z licznymi problemami, czy to w oprogramowaniu, czy w sprzęcie. Naprawiali oni telefony komórkowe, tablety, laptopy, konsole, itp. Praktyka zawodowa odbywała się w języku angielskim oraz hiszpańskim, co pozwoliło uczniom na doskonalenie swoich umiejętności językowych.",
    ],
    textColor: "text-green-600",
    caretColor: "bg-green-600",
    address: {
      country: "Country 2",
      city: "City 2",
      street: "Street 2",
      number: "2",
    },

    website: "https://www.facebook.com/ruben.bravomuniz",

    backgroundGradient: {
      from: "from-green-500",
      to: "to-blue-500",
    },

    href: "microbit-servicio-tecnico",
  },
  {
    slug: "samsung-electronics",
    name: "Telemalaga Samsung C.S.",
    imageSrc: "/companies-logos/samsung-electronics.png",
    imageScale: "scale-x-100 scale-y-100",
    description:
      "Samsung Electronics to firma z siedzibą w Seulu, specjalizująca się w produkcji elektroniki. Firma oferuje praktyki dla studentów z programu Erasmus+.",
    subpageDescription: [
      "W tej firmie nasi uczniowie uczyli się naprawy oraz konfiguracji sprzętu elektronicznego firmy Samsung.",
      "Mieli oni do czynienia z takimi sprzętami jak telefony z linii Samsung Fold albo Samsung Flip. Po za naprawą sprzętu, uczniowie mieli okazję doświadczyć niskopoziomowej pracy z oprogramowaniem wcześniej wspomnianych urządzeń. Praktyka zawodowa odbywała się w języku angielskim oraz hiszpańskim, co pozwoliło uczniom na doskonalenie swoich umiejętności językowych.",
    ],
    textColor: "text-blue-600",
    caretColor: "bg-blue-600",
    address: {
      country: "Country 3",
      city: "City 3",
      street: "Street 3",
      number: "3",
    },

    website: "http://www.telemalaga.es",

    backgroundGradient: {
      from: "from-blue-300",
      to: "to-blue-500",
    },

    href: "samsung-electronics",
  },
  {
    slug: "jc-valvuar-audio",
    name: "JC VALVUAR AUDIO",
    imageSrc: "/companies-logos/jc-valvuar-audio.png",
    imageScale: "scale-x-100 scale-y-100",
    description:
      "JC VALVUAR AUDIO to firma z siedzibą w Maladze, specjalizująca się w produkcji wzmacniaczy gitarowych. Firma oferuje praktyki dla studentów z programu Erasmus+.",
    subpageDescription: [
      "Podczas praktyki zawodowej w firmie JC VALVUAR AUDIO, praktykant był zaangażowany w różnorodne zadania obejmujące lutowanie elementów elektronicznych, tworzenie płytek PCB oraz precyzyjne wydrążanie otworów zarówno w płytach PCB, jak i w blachach. Dodatkowo, praktykant brał udział w procesie montażu, w tym wydrążaniu otworów w obudowie wzmacniacza audio, co wymagało precyzji oraz zdolności manualnych. Ta praktyka zapewniła mu szeroki wgląd w praktyczne aspekty produkcji urządzeń audio oraz umożliwiła rozwój umiejętności technicznych w dziedzinie elektroniki.",
      "Praktyka zawodowa odbywała się w języku angielskim oraz hiszpańskim, co pozwoliło uczniom na doskonalenie swoich umiejętności językowych.",
    ],
    textColor: "text-black",
    caretColor: "bg-black",
    address: {
      country: "Country 5",
      city: "City 5",
      street: "Street 5",
      number: "5",
    },
    website: "https://jcvalvular.com/en/",

    backgroundGradient: {
      from: "from-teal-500",
      to: "to-cyan-500",
    },

    href: "jc-valvuar-audio",
  },
];
