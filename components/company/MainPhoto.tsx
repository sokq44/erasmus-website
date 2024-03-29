"use client";

import React, { FC, useState } from "react";

import Image from "next/image";

interface Props {
  img: { id: number; src: string };
}

const MainPhoto: FC<Props> = (props) => {
  const { id, src } = props.img;

  const [ loaded, setLoaded ] = useState(false);

  return (
    <div
      className="aspect-w-2 aspect-h-1 w-full overflow-hidden rounded-lg scale-75 drop-shadow-[2px_2px_2px_rgba(108,122,137,1)]">
      <Image
        id={id.toString()}
        alt="Zaznaczone zdjęcie opisujące praktyki"
        src={src}
        layout="fill"
        objectFit="cover"
        className={loaded ? "blur-none" : "blur-xl"}
        aria-description="Zaznaczone zdjęcie opisujące praktyki - po kliknięciu otwiera się w oknie dialogowym"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default MainPhoto;
