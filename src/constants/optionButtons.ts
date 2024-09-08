import { filterOptions } from "./filterOptions";

type optionButton = {
    id: number;
    content: string;
};

export const optionButtons: optionButton[] = [
    { id: 1, content: filterOptions.all },
    { id: 2, content: filterOptions.isFavorites },
    { id: 3, content: filterOptions.isNotFavorites },
];
