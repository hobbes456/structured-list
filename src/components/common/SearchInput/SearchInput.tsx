import React from "react";

import { SearchProps } from "@components/Search/Search";

import s from "./SearchInput.module.scss";

const SearchInput: React.FC<SearchProps> = ({ value, onChange }) => {
    const text: string = "Search";

    return (
        <div className={s.searchInput}>
            <label htmlFor={text.toLowerCase()}>{text}</label>
            <input
                type="text"
                className={s.searchInput__field}
                value={value}
                name={text.toLowerCase()}
                id={text.toLowerCase()}
                placeholder="Enter the title of the book"
                onChange={onChange}
            />
        </div>
    );
};

export default SearchInput;
