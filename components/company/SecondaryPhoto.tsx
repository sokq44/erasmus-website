import React, { FC } from "react";

import Image from "next/image";

interface Props {
  path: string;
  id: number;
}

const SecondaryPhoto: FC<Props> = (props) => {
  return (
    <Image
      id={props.id.toString()}
      alt="Zdjęcie opisujące praktyki"
      src={props.path}
      layout="fill"
      objectFit="cover"
      className="duration-700 ease-in-out group-hover:opacity-75 cursor-pointer"
      aria-description="Zdjęcie opisujące praktyki - po kliknięciu otwiera się w oknie dialogowym"
    />
  );
};

export default SecondaryPhoto;
