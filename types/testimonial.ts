export type Profile =
    | "Programista"
    | "Informatyk"
    | "Teleinformatyk"
    | "Elektronik";

export type Testimonial = {
    name: string;
    profile: Profile;
    img: string;
    testimonial: string;
};
