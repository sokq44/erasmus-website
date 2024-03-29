import React, { FC } from "react";
import * as Dialog from "../ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CompanyImageProps {
    path: string;
    setSelectedImageSrc: React.Dispatch<React.SetStateAction<string>>;
}
const CompanyImage: FC<CompanyImageProps> = (props) => {
    const [isLoading, setLoading] = React.useState(true);

    const handleClick = () => {
        props.setSelectedImageSrc(props.path);
    };

    return (
        <Dialog.DialogTrigger asChild>
            <div className="aspect-w-2 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-7 group relative">
                <Image
                    alt="Zdjęcie opisujące praktyki"
                    src={props.path}
                    layout="fill"
                    objectFit="cover"
                    className={cn(
                        "duration-700 ease-in-out group-hover:opacity-75 cursor-pointer",
                        isLoading
                            ? "scale-110 blur-2xl grayscale"
                            : "scale-100 blur-0 grayscale-0"
                    )}
                    onLoad={() => setLoading(false)}
                    onClick={handleClick}
                    aria-description="Zdjęcie opisujące praktyki - po kliknięciu otwiera się w oknie dialogowym"
                />
            </div>
        </Dialog.DialogTrigger>
    );
};

export default CompanyImage;
