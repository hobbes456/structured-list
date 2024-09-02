import { UseFormRegister } from "react-hook-form";

import { IFormItem } from "@/interfaces/IFormItem";
import { IProduct } from "@/interfaces/IProduct";

export interface IFormField {
    className: string;
    item: IFormItem;
    register: UseFormRegister<IProduct>;
}
