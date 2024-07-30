import Head from "next/head";
import { Inter } from "next/font/google";

import HomePage from "@pages/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Home page</title>
                <meta name="keywords" content="structured list" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="description" content="Simple structured list app" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <HomePage />
        </>
    );
}
