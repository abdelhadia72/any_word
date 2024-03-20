import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [theme, setTheme] = useState("dark");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // deal with theme

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log("theme changed");
  };

  return (
    <div className="flex justify-between items-center">
      <div className="logo cursor-pointer">
        <img className="max-w-14" src="/src/assets/logo.png" alt="logo.png" />
      </div>
      <div className="rightSide flex  gap-10 justify-between items-center">
        <div className="font ">
          <select
            className=" rounded-[5px] p-2 px-2 dark:bg-[#175744] transition-all dark:text-white"
            value={selectedOption}
            onChange={handleOptionChange}>
            <option value="sans">Sans Serif</option>
            <option value="serif">Serif</option>
            <option value="mono">Mono</option>
          </select>
        </div>
        <div
          onClick={handleThemeChange}
          className="themeSwitch cursor-pointer active:rotate-45 active:scale-95
          transition-all">
          <img
            className="max-w-8"
            src={
              theme === "light" ? "/src/assets/moon.png" : "/src/assets/sun.png"
            }
            alt=""
          />
          <img className="max-w-8" src="" alt="" />
        </div>
      </div>
    </div>
  );
};
