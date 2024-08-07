import React from "react";
import { useState } from "react";

import FormItem from "@components/FormItem";
import { formItems } from "@/constants/formItems";
import { formButtons } from "@/constants/formButtons";
import { IProduct } from "@/interfaces/IProduct";
import { templateProductFormDate } from "@/constants/templateProductFormDate";

import s from "./ProductForm.module.scss";

const ProductForm = () => {
    const [formDate, setFormDate] = useState<IProduct>(
        structuredClone(templateProductFormDate)
    );

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = event.target;

        setFormDate((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (
        event:
            | React.MouseEvent<HTMLButtonElement>
            | React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
    };

    const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setFormDate(structuredClone(templateProductFormDate));
    };

    return (
        <form
            className={s.productForm}
            action="#"
            method="post"
            onSubmit={handleSubmit}
        >
            {formItems.map((item) => (
                <FormItem
                    key={item.id}
                    item={item}
                    value={formDate[item.id]}
                    onChange={handleChange}
                />
            ))}
            <div className={s.productForm__buttons}>
                {formButtons.map((item) => (
                    <button
                        key={item.type}
                        type={item.type}
                        className={s.productForm__button}
                        onClick={
                            item.type === "submit" ? handleSubmit : handleReset
                        }
                    >
                        {item.type.toUpperCase()}
                    </button>
                ))}
            </div>
        </form>
    );
};

export default ProductForm;
