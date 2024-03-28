import Container from "@/components/home/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { FC } from "react";

interface Props {}

const NotFound: FC<Props> = () => {
    return (
        <Container shouldAnimate className="text-center">
            <h1 className="text-4xl font-bold">Page Not Found</h1>
            <Link href="/" className="mt-8">
                <Button>Home page</Button>
            </Link>
        </Container>
    );
};

export default NotFound;
