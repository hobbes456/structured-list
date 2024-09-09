import Link from "next/link";

import s from "./Error404.module.scss";

const Error404 = () => (
    <div className={s.error404}>
        <Link className={s.error404__link} href="/">
            Error 404
        </Link>
        <p className={s.error404__text}>
            (This page does not exist, to return to the home page click on the
            link above)
        </p>
    </div>
);

export default Error404;
