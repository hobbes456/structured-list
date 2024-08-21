import { IFormItem } from "@/interfaces/IFormItem";

import { formErrorMessages } from "./formErrorMessages";

const {
    REQUIRED_ERROR_MESSAGE,
    MINLENGTH_ERROR_MESSAGE,
    MAXLENGTH_ERROR_MESSAGE,
    VALID_AUTHOR_FORMAT,
    VALID_YEAR,
    IS_EMPTY,
    NUMBERS_ONLY
} = formErrorMessages;

const isEmpty = (value: string): string | boolean =>
    value.trim() === "" ? IS_EMPTY : true;

const isValidYear = (value: string): string | boolean =>
    parseInt(value) > new Date().getFullYear() || value.trim() === ""
        ? VALID_YEAR
        : true;

export const formItems: IFormItem[] = [
    {
        title: "Article",
        id: "article",
        placeholder: "Enter the article in numbers",
        validations: {
            required: { value: true, message: REQUIRED_ERROR_MESSAGE },
            minLength: { value: 2, message: MINLENGTH_ERROR_MESSAGE },
            maxLength: { value: 10, message: MAXLENGTH_ERROR_MESSAGE },
            pattern: {
                value: /^\d+$/,
                message: NUMBERS_ONLY,
            },
            validate: (value: string) => isEmpty(value),
        },
    },
    {
        title: "Book title",
        id: "title",
        placeholder: "Enter book title",
        validations: {
            required: { value: true, message: REQUIRED_ERROR_MESSAGE },
            maxLength: { value: 50, message: MAXLENGTH_ERROR_MESSAGE },
            validate: (value: string) => isEmpty(value),
        },
    },
    {
        title: "Author",
        id: "author",
        placeholder: "Enter author in Ivanov A.A. format",
        validations: {
            required: { value: true, message: REQUIRED_ERROR_MESSAGE },
            maxLength: { value: 30, message: MAXLENGTH_ERROR_MESSAGE },
            pattern: {
                value: /^[A-ZА-Я][a-zа-я]{1,20}\s[A-ZА-Я]\.[A-ZА-Я]\.$/,
                message: VALID_AUTHOR_FORMAT,
            },
            validate: (value: string) => isEmpty(value),
        },
    },
    {
        title: "Year of writing",
        id: "year",
        placeholder: "Enter year of writing",
        validations: {
            required: { value: true, message: REQUIRED_ERROR_MESSAGE },
            validate: (value: string) => isValidYear(value),
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
            validate: (value: string) => isEmpty(value),
        },
    },
];
