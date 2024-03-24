import React, { FC } from "react";

interface Props {}

const ImagesGrid: FC<Props> = () => {
    return (
        <div className="grid grid-cols-6 gap-x-8 gap-y-4 max-w-4xl w-full min-h-80">
            <div className="bg-green-500 col-span-4 rounded-xl"></div>
            <div className="bg-blue-500 col-span-2 rounded-xl"></div>

            <div className="bg-red-500 col-span-2 rounded-xl"></div>
            <div className="bg-yellow-500 col-span-4 rounded-xl"></div>
        </div>
    );
};

export default ImagesGrid;
