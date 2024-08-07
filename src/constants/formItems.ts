import { IFormItem } from "@/interfaces/IFormItem";

export const formItems: IFormItem[] = [
    {
        title: "Book title",
        id: "title",
        placeholder: "Enter book title",
        required: true,
    },
    {
        title: "Author",
        id: "author",
        placeholder: "Enter author",
        required: true,
    },
    {
        title: "Date of writing",
        id: "date",
        placeholder: "Enter date of writing",
        required: true,
    },
    {
        title: "Description of the book",
        id: "description",
        placeholder: "Enter a description",
        required: true,
        isTextarea: true,
    },
];
