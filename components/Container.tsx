import React, { FC } from "react";

interface Props {
    children: React.ReactNode;
}

const Container: FC<Props> = (props) => {
    return <section className="py-24 flex flex-col">{props.children}</section>;
};

export default Container;
