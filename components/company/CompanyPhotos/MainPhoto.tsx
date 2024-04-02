"use client";

import React, { FC, useState } from "react";

import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";

interface Props {
    img: { id: number; src: string };
}

const MainPhoto: FC<Props> = (props) => {
    const { id, src } = props.img;

    const [loaded, setLoaded] = useState(false);

    return (
        <Link
            href={process.env.NEXT_PUBLIC_PAGE_URL + src}
            target="_blank"
            className={cn(
                loaded ? "blur-none " : "blur-lg bg-slate-500",
                "aspect-w-2 aspect-h-1 w-full overflow-hidden rounded-lg scale-75 hover:scale-[0.76] transition"
            )}
        >
            <Image
                id={id.toString()}
                alt="Zaznaczone zdjęcie opisujące praktyki"
                src={src}
                layout="fill"
                objectFit="cover"
                className={`${
                    loaded ? "blur-none" : "blur-xl"
                } rounded-3xl transition`}
                aria-description="Zaznaczone zdjęcie opisujące praktyki - po kliknięciu otwiera się w oknie dialogowym"
                onLoad={() => setLoaded(true)}
            />
        </Link>
    );
};

export default MainPhoto;
