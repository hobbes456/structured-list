import React from "react";
import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";

import { IFormItem } from "@/interfaces/IFormItem";
import { IFormValues } from "@/interfaces/IFormValues";

import s from "./FormItem.module.scss";

type FormItemProps = {
    item: IFormItem;
    register: UseFormRegister<IFormValues>;
    errors: FieldErrors<FieldValues>;
};

const FormItem: React.FC<FormItemProps> = ({ item, register, errors }) => {
    return (
        <div className={s.formItem}>
            <label htmlFor={item.id}>{item.title}</label>
            {item.isTextarea ? (
                <textarea
                    {...register(item.id, item.validations)}
                    className={s.formItem__field}
                    name={item.id}
                    id={item.id}
                    placeholder={item.placeholder}
                />
            ) : (
                <input
                    {...register(item.id, item.validations)}
                    className={s.formItem__field}
                    name={item.id}
                    id={item.id}
                    placeholder={item.placeholder}
                />
            )}
            <div className={s.formItem__warning}>
                {errors?.[item.id] && `${errors?.[item.id]?.message}`}
            </div>
        </div>
    );
};

export default FormItem;
