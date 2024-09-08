import React from "react";
import clsx from "clsx";

import { useAction } from "@/hooks/useAction";
import { useAppSelector } from "@/hooks/useAppSelector";

import { change, filtersSelectors } from "@/models/filter";

import SearchInput from "@components/SearchInput";

import { optionButtons } from "@/constants/optionButtons";

import s from "./Search.module.scss";

export type SearchProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<SearchProps> = ({ value, onChange }) => {
    const status = useAppSelector(filtersSelectors.status);

    const handleClick = useAction(change);

    return (
        <div className={s.search}>
            <SearchInput value={value} onChange={onChange} />
            <div className={s.search__options}>
                {optionButtons.map((option) => (
                    <button
                        className={clsx(s.search__option, {
                            [s.search__option_active]:
                                status === option.content,
                        })}
                        key={option.id}
                        onClick={() => handleClick(option.content)}
                    >
                        {option.content}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Search;
