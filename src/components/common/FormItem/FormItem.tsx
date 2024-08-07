import React from "react";
import { IFormItem } from "@/interfaces/IFormItem";

import s from "./FormItem.module.scss";

type FormItemProps = {
    item: IFormItem;
    value: string;
    onChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
};

const FormItem: React.FC<FormItemProps> = ({ item, value, onChange }) => {
    return (
        <div className={s.formItem}>
            <label htmlFor={item.id}>{item.title}</label>
            {item.isTextarea ? (
                <textarea
                    className={s.formItem__field}
                    value={value}
                    name={item.id}
                    id={item.id}
                    placeholder={item.placeholder}
                    onChange={onChange}
                    required={item.required}
                />
            ) : (
                <input
                    className={s.formItem__field}
                    type="text"
                    value={value}
                    name={item.id}
                    id={item.id}
                    placeholder={item.placeholder}
                    onChange={onChange}
                    required={item.required}
                />
            )}
        </div>
    );
};

export default FormItem;
