"use client";

import React, { FC, useState } from "react";

import { cn } from "@/lib/utils";

import Container from "../home/Container";

import type { Company } from "@/types/company";

import Image from "next/image";
import SelectedImage from "./SelectedImage";
import * as Dialog from "../ui/dialog";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
    company: Company;
    filePaths: string[];
}

const CompanyPhotos: FC<Props> = (props) => {
    const { company, filePaths } = props;
    const [selectedImageSrc, setSelectedImageSrc] = useState<string>("");

    return (
        <Dialog.Dialog>
            <Container>
                <span
                    className={cn(
                        "text-4xl font-bold mx-auto",
                        company.textColor
                    )}
                >
                    Zdjęcia
                </span>
                <div className="mt-8 p-10 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
                    {filePaths.map((path, i) => (
                        <CompanyImage
                            key={i}
                            path={path}
                            setSelectedImageSrc={setSelectedImageSrc}
                        />
                    ))}
                </div>

                {selectedImageSrc.length > 0 ? (
                    <Dialog.DialogContent className="max-w-3xl w-full flex flex-col ">
                        <>
                            <SelectedImage
                                selectedImageSrc={selectedImageSrc}
                            />
                            <Link
                                className="self-end bg-blue-700 hover:bg-primary transition duration-300 text-white px-4 py-2 rounded"
                                target="_blank"
                                href={`${process.env.NEXT_PUBLIC_PAGE_URL}${selectedImageSrc}`}
                            >
                                Otwórz w nowej karcie
                            </Link>
                        </>
                    </Dialog.DialogContent>
                ) : null}
            </Container>
        </Dialog.Dialog>
    );
};

function CompanyImage({
    path,
    setSelectedImageSrc,
}: {
    path: string;
    setSelectedImageSrc: React.Dispatch<React.SetStateAction<string>>;
}) {
    const [isLoading, setLoading] = useState(true);

    const handleClick = () => {
        setSelectedImageSrc(path);
    };

    return (
        <Dialog.DialogTrigger asChild>
            <div className="aspect-w-2 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-7 group relative">
                <Image
                    alt="Zdjęcie opisujące praktyki"
                    src={path}
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
}

export default CompanyPhotos;
