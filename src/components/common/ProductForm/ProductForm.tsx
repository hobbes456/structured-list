import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useAction } from "@/hooks/useAction";

import { add, edit } from "@/models/product";

import FormItem from "@components/FormItem";

import { IProduct } from "@/interfaces/IProduct";

import { formItems } from "@/constants/formItems";
import { formButtons } from "@/constants/formButtons";

import s from "./ProductForm.module.scss";

type ProductFormProps = {
    item?: IProduct;
    onClose: () => void;
};

const ProductForm: React.FC<ProductFormProps> = ({ item, onClose }) => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm<IProduct>({ mode: "onBlur", defaultValues: item });

    const handleCreate = useAction(add);
    const handleEdit = useAction(edit);

    const onSubmit: SubmitHandler<IProduct> = (data: IProduct) => {
        item ? handleEdit(data) : handleCreate(data);

        reset();

        onClose();
    };

    return (
        <form
            className={s.productForm}
            action="#"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
        >
            {formItems.map((item) => (
                <FormItem
                    key={item.id}
                    item={item}
                    register={register}
                    errors={errors}
                />
            ))}
            <div className={s.productForm__buttons}>
                {formButtons.map((item) => (
                    <button
                        key={item.type}
                        type={item.type}
                        className={s.productForm__button}
                        disabled={item.type === "submit" && !isValid}
                    >
                        {item.type.toUpperCase()}
                    </button>
                ))}
            </div>
        </form>
    );
};

export default ProductForm;
