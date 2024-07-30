import React from "react";
import { useState, useEffect } from "react";

import AppLoader from "@components/AppLoader";
import Information from "@components/Information";

import s from "./HomePage.module.scss";

const HomePage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 300);
    }, []);

    return (
        <>
            {isLoading ? (
                <AppLoader />
            ) : (
                <div>
                    <button>Create Product</button>
                    <Information />
                </div>
            )}
        </>
    );
};

export default HomePage;
