import React, { FC } from "react";
import FooterItem from "./FooterItem";

import { GithubIcon } from "lucide-react";

interface Props {
    children?: React.ReactNode;
}

const Footer: FC<Props> = (props) => {
    const { children } = props;
    return (
        <footer className="py-10 bg-gradient-to-br from-[#03045E] to-blue-900 text-white">
            <div className="flex flex-col justify-evenly items-center md:items-start md:flex-row gap-16 md:gap-0">
                <div>
                    <h4 className="font-bold text-xl ml-1">Organizatorzy:</h4>
                    <ul className="mt-4">
                        <FooterItem href="https://zseil.edu.pl/new/">
                            ZSEIL
                        </FooterItem>
                        <FooterItem href="https://euromind.es/?lang=pl">
                            Euromind
                        </FooterItem>
                        <FooterItem href="https://european-union.europa.eu/index_pl">
                            European Union
                        </FooterItem>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-xl ml-1">Autorzy:</h4>
                    <ul className="mt-4">
                        <FooterItem
                            href="https://github.com/sokq44/"
                            icon={<GithubIcon />}
                        >
                            Michał Socki
                        </FooterItem>
                        <FooterItem
                            href="https://github.com/KoniczynSzef/"
                            icon={<GithubIcon />}
                        >
                            Piotr Kończyk
                        </FooterItem>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-16 mx-8">
                &copy; Copyright 2024 Zespół Szkół Elektronicznych i Licealnych
                w Warszawie
            </div>
            {children}
        </footer>
    );
};

export default Footer;
