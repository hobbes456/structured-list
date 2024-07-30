import React from "react";
import Link from "next/link";

import { informationContent } from "@/constants/informationContent";

import s from "./Information.module.scss";

const Information = () => {
    return (
        <div>
            {informationContent.map((item) => (
                <p key={item.id}>
                    {item.text}{" "}
                    {item.href && <Link href={item.href}>{item.linkText}</Link>}
                </p>
            ))}
        </div>
    );
};

export default Information;
