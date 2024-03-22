import React, { FC } from "react";

interface Props {
    children: string;
    className?: string;
}

const HeroTitle: FC<Props> = (props) => {
    const { children, className } = props;
    const mergedClasses =
        "hero-title text-3xl text-transparent font-semibold bg-clip-text bg-gradient-to-br " +
        className;

    return <div className={mergedClasses}>{children}</div>;
};

export default HeroTitle;
