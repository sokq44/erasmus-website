"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";

interface Props {}

const CertificatesImage: FC<Props> = () => {
    const [loaded, setLoaded] = React.useState(false);

    return (
        <Image
            src={"/certificates.jpeg"}
            alt="Zdjęcie przedstawiające uczniów z certyfikatami"
            width={600}
            height={400}
            className={cn("rounded-xl", loaded ? "blur-none" : "blur-xl")}
            onLoad={() => setLoaded(true)}
        />
    );
};

export default CertificatesImage;
