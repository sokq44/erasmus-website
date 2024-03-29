import React, { FC } from "react";

// import Container from "@/components/home/Container";
import FooterItem from "./FooterItem";

import {GithubIcon} from "lucide-react";

interface Props {
  children?: React.ReactNode;
}

const Footer: FC<Props> = (props) => {
  const { children } = props;
  return (
    <footer className="py-10 bg-[#03045E] text-white">
      <div className="flex">
        <div className="ml-[25%]">
          <h4 className="font-bold text-lg ml-1">Organisers:</h4>
          <ul>
            <FooterItem href="https://zseil.edu.pl/new/">ZSEIL</FooterItem>
            <FooterItem href="https://euromind.es/?lang=pl">
              Euromind
            </FooterItem>
            <FooterItem href="https://european-union.europa.eu/index_pl">
              European Union
            </FooterItem>
          </ul>
        </div>
        <div className="ml-[25%]">
          <h4 className="font-bold text-lg ml-1">Authors:</h4>
          <ul>
            <FooterItem href="https://github.com/sokq44/" icon={<GithubIcon />}>
              Michał Socki
            </FooterItem>
            <FooterItem href="https://github.com/KoniczynSzef/" icon={<GithubIcon />}>
              Piotr Kończyk
            </FooterItem>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10">
        &copy; Copyright 2024 Zespół Szkół Elektronicznych i Licealnych w
        Warszawie
      </div>
      {children}
    </footer>
  );
};

export default Footer;
