import React, { FC } from "react";

import Link from "next/link";

import Container from "@/components/home/Container";

interface Props {
  children?: React.ReactNode;
}

const Footer: FC<Props> = (props) => {
  const { children } = props;
  return (
    <Container className="py-0">
      <div className="flex flex-row">
        <div className="ml-[25%]">
          <h4 className="font-semibold text-lg">Organisers:</h4>
          <ul>
            <li>
              <Link href="https://github.com/sokq44/">ZSEIL</Link>
            </li>
            <li>
              <Link href="https://github.com/KoniczynSzef/">Euromind</Link>
            </li>
            <li>
              <Link href="https://github.com/KoniczynSzef/">
                European Union
              </Link>
            </li>
          </ul>
        </div>
        <div className="ml-[25%]">
          <h4 className="font-semibold text-lg">Authors:</h4>
          <ul>
            <li>
              <Link href="https://github.com/sokq44/">Michał Socki</Link>
            </li>
            <li>
              <Link href="https://github.com/KoniczynSzef/">Piotr Kończyk</Link>
            </li>
          </ul>
        </div>
        <div className="m-auto">
            Copyright
        </div>
      </div>
      {children}
    </Container>
  );
};

export default Footer;
