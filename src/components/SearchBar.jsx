import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { ErrorContext } from "../App";
import { WordData } from "../App";
import searchImage from "/src/assets/search.png";

export const SearchBar = (e) => {
  const refValue = useRef("");
  const [dataValue, setDataValue] = useContext(WordData);
  const [pageError, setPageError] = useContext(ErrorContext);
  const [mounted, setMounted] = useState(false);

  const search = async () => {
    const word = refValue.current.value;

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setPageError(false);
      setMounted(true);
      const data = await response.json();
      setDataValue(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    refValue.current.value = "";
  };

  useEffect(() => {
    if (!mounted) {
      refValue.current.value = "hello";
      setMounted(true);
      search();
    }
  }, [mounted]);

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
          src={searchImage}
          alt="search.png"
          onClick={search}
        />
      </div>
    </div>
  );
};
