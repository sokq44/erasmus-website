import Container from "@/components/home/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { FC } from "react";

interface Props {}

const NotFound: FC<Props> = () => {
    return (
        <Container shouldAnimate className="text-center gap-16">
            <h1 className="text-4xl font-bold">Page Not Found</h1>

            <p className="text-muted-foreground max-w-2xl mx-auto">
                The page you are looking for does not exist. It may have been
                moved, or it may no longer be available. Please check the URL
                and try again.
            </p>

            <Link href="/">
                <Button>Home page</Button>
            </Link>
        </Container>
    );
};

export default NotFound;
