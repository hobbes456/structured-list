import { IFormItem } from "@/interfaces/IFormItem";

import { formErrorMessages } from "./formErrorMessages";

const {
    REQUIRED_ERROR_MESSAGE,
    MINLENGTH_ERROR_MESSAGE,
    MAXLENGTH_ERROR_MESSAGE,
} = formErrorMessages;

export const formItems: IFormItem[] = [
    {
        title: "Article",
        id: "article",
        placeholder: "Enter article",
        validations: {
            required: { value: true, message: REQUIRED_ERROR_MESSAGE },
            minLength: { value: 2, message: MINLENGTH_ERROR_MESSAGE },
            maxLength: { value: 10, message: MAXLENGTH_ERROR_MESSAGE },
        },
    },
    {
        title: "Book title",
        id: "title",
        placeholder: "Enter book title",
        validations: {
            required: { value: true, message: REQUIRED_ERROR_MESSAGE },
            maxLength: { value: 50, message: MAXLENGTH_ERROR_MESSAGE },
        },
    },
    {
        title: "Author",
        id: "author",
        placeholder: "Enter author",
        validations: {
            required: { value: true, message: REQUIRED_ERROR_MESSAGE },
            maxLength: { value: 30, message: MAXLENGTH_ERROR_MESSAGE },
        },
    },
    {
        title: "Year of writing",
        id: "year",
        placeholder: "Enter year of writing",
        validations: {
            required: { value: true, message: REQUIRED_ERROR_MESSAGE },
            maxLength: { value: 4, message: MAXLENGTH_ERROR_MESSAGE },
        },
    },
    {
        title: "Description of the book",
        id: "description",
        placeholder: "Enter a description",
        isTextarea: true,
        validations: {
            required: { value: true, message: REQUIRED_ERROR_MESSAGE },
            maxLength: { value: 100, message: MAXLENGTH_ERROR_MESSAGE },
        },
    },
];
