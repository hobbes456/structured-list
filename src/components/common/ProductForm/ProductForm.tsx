import FormItem from "@components/FormItem";
import { formItems } from "@/constants/formItems";

import s from "./ProductForm.module.scss";

const ProductForm = () => {
    return (
        <form className={s.productForm} action="#" method="post">
            {formItems.map((item) => (
                <FormItem key={item.id} item={item} />
            ))}
            <div className={s.productForm__buttons}>
                <button type="submit" className={s.productForm__button}>
                    SUBMIT
                </button>
                <button type="reset" className={s.productForm__button}>
                    RESET
                </button>
            </div>
        </form>
    );
};

export default ProductForm;
