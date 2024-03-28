"use client";

import Image from "next/image";
import React, { FC } from "react";

interface Props {
    selectedImageSrc: string;
}

const SelectedImage: FC<Props> = (props) => {
    const [isLoading, setIsLoading] = React.useState(true);

    return (
        <div className="bg-gray-200 rounded-lg">
            <Image
                src={props.selectedImageSrc}
                alt="Zdjęcie opisujące praktyki"
                height={500}
                width={800}
                className={`rounded-lg ${
                    isLoading
                        ? "blur-2xl grayscale scale-110"
                        : "blur-none grayscale-0 scale-100"
                }`}
                onLoad={() => setIsLoading(false)}
            />
        </div>
    );
};

export default SelectedImage;
