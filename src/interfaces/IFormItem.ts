export interface IFormItem {
    title: string;
    id: "article" | "title" | "author"| "coverPath" | "year" | "description";
    placeholder: string;
    validations?: {
        [index: string]:
            | { value: any; message: string }
            | ((value: string) => string | boolean);
    };
    isTextarea?: boolean;
}
