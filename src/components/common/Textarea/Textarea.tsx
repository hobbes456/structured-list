import React from "react";

import { IFormField } from "@/interfaces/IFormField";

const Textarea: React.FC<IFormField> = ({ className, item, register }) => {
    return (
        <textarea
            className={className}
            {...register(item.id, item.validations)}
            name={item.id}
            id={item.id}
            placeholder={item.placeholder}
        ></textarea>
    );
};

export default Textarea;
