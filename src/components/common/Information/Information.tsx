import React from "react";
import Link from "next/link";

import { informationContent } from "@/constants/informationContent";

import s from "./Information.module.scss";

const Information = () => {
    return (
        <div className={s.information}>
            {informationContent.map((item) => (
                <p className={s.information__text} key={item.id}>
                    {item.text}{" "}
                    {item.href && (
                        <Link className={s.information__link} href={item.href}>
                            {item.linkText}
                        </Link>
                    )}
                </p>
            ))}
        </div>
    );
};

export default Information;
