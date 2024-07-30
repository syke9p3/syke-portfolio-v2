import React from "react";
import { Helmet } from "react-helmet";

const PageLayout = ({ title, children }: { title: string, children: React.ReactNode }) => {
    return (
        <>
            <Helmet>
                <title>{title ? title + " | " : ""} Kenth Saya-ang</title>
            </Helmet>

            <main className="min-h-[90dvh] container mx-auto bg-cover bg-center bg-no-repeat">
                {children}
            </main>

            {/* <Footer /> */}
        </>
    );
};

export default PageLayout;