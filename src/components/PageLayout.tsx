import React from "react";
import { Helmet } from "react-helmet";

const PageLayout = ({ title, children }: { title: string, children: React.ReactNode }) => {
    return (
        <>
            <Helmet>
                <title>{title ? title + " | " : "" } Kenth Saya-ang Portfolio</title>
            </Helmet>

            <main className="min-h-[400px] container mx-auto bg-cover bg-center bg-no-repeat">
                {children}
            </main>
        </>
    );
};

export default PageLayout;