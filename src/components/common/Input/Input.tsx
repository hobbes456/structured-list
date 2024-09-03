import React from "react";

import { IFormField } from "@/interfaces/IFormField";

const Input: React.FC<IFormField> = ({ className, item, register }) => {
    return (
        <input
            type="text"
            className={className}
            {...register(item.id, item.validations)}
            name={item.id}
            id={item.id}
            placeholder={item.placeholder}
        />
    );
};

export default Input;
