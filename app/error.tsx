"use client";

import { Button } from "@/components/ui/button";
import React, { FC } from "react";

interface Props {
    error: Error & { digest?: string };
    reset: () => void;
}

const error: FC<Props> = (props) => {
    React.useEffect(() => {
        console.error(props.error.message);
    }, []);

    return (
        <div>
            <h1>Error</h1>
            <p>{props.error.message}</p>
            <Button onClick={props.reset}>Try again!</Button>
        </div>
    );
};

export default error;
