import Link from "next/link";

import { errorMessages } from "@/constants/errorMessages";

import s from "./Error404.module.scss";

const Error404 = () => {
    const { ERROR404_MESSAGE } = errorMessages;

    return (
        <div className={s.error404}>
            <Link className={s.error404__link} href="/">
                Error 404
            </Link>
            <p className={s.error404__text}>{ERROR404_MESSAGE}</p>
        </div>
    );
};

export default Error404;
