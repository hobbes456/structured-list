import React from "react";
import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";

import { IFormItem } from "@/interfaces/IFormItem";
import { IProduct } from "@/interfaces/IProduct";

import FormInput from "@components/FormInput";
import FormTextarea from "@components/FormTextarea";

import s from "./FormItem.module.scss";

type FormItemProps = {
    item: IFormItem;
    register: UseFormRegister<IProduct>;
    errors: FieldErrors<FieldValues>;
};

const FormItem: React.FC<FormItemProps> = ({ item, register, errors }) => {
    return (
        <div className={s.formItem}>
            <label htmlFor={item.id}>{item.title}</label>
            {item.isTextarea ? (
                <FormTextarea
                    className={s.formItem__field}
                    item={item}
                    register={register}
                />
            ) : (
                <FormInput
                    className={s.formItem__field}
                    item={item}
                    register={register}
                />
            )}
            <div className={s.formItem__warning}>
                {errors?.[item.id] && `${errors?.[item.id]?.message}`}
            </div>
        </div>
    );
};

export default FormItem;
