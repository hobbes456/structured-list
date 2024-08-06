import React from "react";
import { IFormItem } from "@/interfaces/IFormItem";

import s from "./FormItem.module.scss";

type FormItemProps = {
    item: IFormItem;
};

const FormItem: React.FC<FormItemProps> = ({ item }) => {
    return (
        <div className={s.formItem}>
            <label htmlFor={item.id}>{item.title}</label>
            {item.isTextarea ? (
                <textarea
                    className={s.formItem__field}
                    name={item.id}
                    id={item.id}
                    placeholder={item.placeholder}
                    required={item.required}
                />
            ) : (
                <input
                    className={s.formItem__field}
                    type="text"
                    name={item.id}
                    id={item.id}
                    placeholder={item.placeholder}
                    required={item.required}
                />
            )}
        </div>
    );
};

export default FormItem;
