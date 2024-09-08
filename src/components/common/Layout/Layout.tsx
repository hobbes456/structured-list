import React, { useState, useEffect } from "react";

import AppLoader from "@components/AppLoader";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 300);
    }, []);

    return isLoading ? <AppLoader /> : children;
};

export default Layout;
