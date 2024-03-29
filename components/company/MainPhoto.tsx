"use client";

import React, { FC, useState } from "react";

import Img from "next/image";
import { Image } from "@/types/image";

interface Props {
    img: Image;
}

const MainPhoto: FC<Props> = (props) => {
    const { id, src } = props.img;

    const [loaded, setLoaded] = useState(false);

    return (
        <div className="aspect-w-2 aspect-h-1 w-full overflow-hidden rounded-lg scale-75">
            <Img
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
