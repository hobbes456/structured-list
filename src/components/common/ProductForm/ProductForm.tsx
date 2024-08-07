import FormItem from "@components/FormItem";
import { formItems } from "@/constants/formItems";
import { formButtons } from "@/constants/formButtons";

import s from "./ProductForm.module.scss";

const ProductForm = () => {
    return (
        <form className={s.productForm} action="#" method="post">
            {formItems.map((item) => (
                <FormItem key={item.id} item={item} />
            ))}
            <div className={s.productForm__buttons}>
                {formButtons.map((item) => (
                    <button
                        key={item.type}
                        type={item.type}
                        className={s.productForm__button}
                    >
                        {item.type.toUpperCase()}
                    </button>
                ))}
            </div>
        </form>
    );
};

export default ProductForm;
