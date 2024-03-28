"use client";

import React, { FC, useState } from "react";

import { cn } from "@/lib/utils";

import Container from "../home/Container";

import type { Company } from "@/types/company";

import SelectedImage from "./SelectedImage";
import * as Dialog from "../ui/dialog";
import CompanyImage from "./CompanyImage";

interface Props {
    company: Company;
    filePaths: string[];
}

const CompanyPhotos: FC<Props> = (props) => {
    const { company, filePaths } = props;
    const [selectedImageSrc, setSelectedImageSrc] = useState<string>("");

    const [isPortrait, setIsPortrait] = useState(false);

    return (
        <Dialog.Dialog>
            <Container className="">
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
                    <Dialog.DialogContent
                        className={`max-w-3xl w-11/12 md:w-full flex flex-col overflow-hidden rounded-xl ${
                            isPortrait ? "scale-100 md:scale-[0.65]" : ""
                        }`}
                    >
                        <SelectedImage
                            selectedImageSrc={selectedImageSrc}
                            className="mt-8"
                            setIsPortrait={setIsPortrait}
                        />
                    </Dialog.DialogContent>
                ) : null}
            </Container>
        </Dialog.Dialog>
    );
};

export default CompanyPhotos;
