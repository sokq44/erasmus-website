"use client";

import Container from "@/components/home/Container";
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
        <Container className="text-center gap-16">
            <h1 className="text-4xl font-bold text-center">Error</h1>

            <p className="text-muted-foreground max-w-2xl text-center mx-auto">
                {props.error.message}
            </p>

            <Button onClick={props.reset} className="self-center">
                Try again!
            </Button>
        </Container>
    );
};

export default error;
