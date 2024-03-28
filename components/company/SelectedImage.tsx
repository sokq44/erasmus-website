"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
    selectedImageSrc: string;
    setIsPortrait: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectedImage: FC<Props> = (props) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const ref = React.useRef<HTMLImageElement | null>(null);

    const isPortrait = React.useMemo(() => {
        return Boolean(
            ref.current?.height &&
                ref.current?.width &&
                ref.current.height > ref.current.width
        );
    }, [ref.current?.height, ref.current?.width]);

    React.useEffect(() => {
        props.setIsPortrait(isPortrait);
    }, [isPortrait]);

    return (
        <div className={cn("bg-gray-200 rounded-lg", props.className)}>
            <Image
                ref={ref}
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
