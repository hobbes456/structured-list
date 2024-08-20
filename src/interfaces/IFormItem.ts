export interface IFormItem {
    title: string;
    id: "article" | "title" | "author" | "year" | "description";
    placeholder: string;
    validations: {
        [index: string]: { value: string | number | boolean; message: string };
    };
    isTextarea?: boolean;
}
