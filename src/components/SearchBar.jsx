import React, { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { WordData } from "../App";

export const SearchBar = (e) => {
  const refValue = useRef("");
  const [dataValue, setDataValue] = useContext(WordData);
  const [word, setWord] = useState("hello");

  const { data, loading, error } = useFetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  const search = () => {
    console.log(data);
    setDataValue(data);
    setWord(refValue.current.value);
    refValue.current.value = "";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  useEffect(() => {
    refValue.current.focus();
  });

  return (
    <div className="holder">
      <div className="flex items-center transition-all p-2 rounded-md mt-8 gap-10 bg-gray-200 pr-4 dark:bg-[#0f4333] ">
        <input
          className="rounded-sm text-xl font-semibold grow outline-none bg-transparent text-gray-900 dark:text-white p-2 px-2 outline-2"
          type="text"
          placeholder="Search for a word"
          onKeyDown={handleKeyDown}
          ref={refValue}
        />
        <img
          className="size-6 dark:invert cursor-pointer active:scale-75 transition-all"
          src="/src/assets/search.png"
          alt="search.png"
          onClick={search}
        />
      </div>
    </div>
  );
};
