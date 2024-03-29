import React, { FC } from "react";

import Image from "next/image";

interface Props {
  img: { id: number; src: string };
}

const MainPhoto: FC<Props> = (props) => {
  const { id, src } = props.img;

  return (
    <Image
      id={id.toString()}
      alt="Zaznaczone zdjęcie opisujące praktyki"
      src={src}
      layout="fill"
      objectFit="cover"
      className="rounded-xl"
      aria-description="Zaznaczone zdjęcie opisujące praktyki - po kliknięciu otwiera się w oknie dialogowym"
    />
  );
};

export default MainPhoto;
