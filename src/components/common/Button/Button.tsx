import React from "react";

import s from "./Button.module.scss";

type ButtonProps = {
    title: string;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
    return (
        <button className={s.button} onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;
