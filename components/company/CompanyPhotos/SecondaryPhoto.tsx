import React, { FC, useState } from "react";

import { cn } from "@/lib/utils";

import Image from "next/image";

interface Props {
  path: string;
  id: number;
}

const SecondaryPhoto: FC<Props> = (props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn(
      "duration-700 ease-in-out group-hover:opacity-75 cursor-pointer ",
      loaded ? "blur-none" : "blur-lg bg-slate-500"
    )}>
      <Image
        id={props.id.toString()}
        alt="Zdjęcie opisujące praktyki"
        src={props.path}
        layout="fill"
        objectFit="cover"
        aria-description="Zdjęcie opisujące praktyki - po kliknięciu otwiera się w oknie dialogowym"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default SecondaryPhoto;
