import React from "react";
import Link from "next/link";

import { errorMessages } from "@/constants/errorMessages";

import s from "./Error.module.scss";

type ErrorProps = {
    errorType: "Error404" | "Network Error";
};

const Error: React.FC<ErrorProps> = ({ errorType }) => {
    const { ERROR404_MESSAGE, NETWORK_ERROR_MESSAGE } = errorMessages;

    return (
        <div className={s.error}>
            <Link className={s.error__link} href="/">
                {errorType}
            </Link>
            <p className={s.error__text}>
                {errorType === "Error404"
                    ? ERROR404_MESSAGE
                    : NETWORK_ERROR_MESSAGE}
            </p>
        </div>
    );
};

export default Error;
