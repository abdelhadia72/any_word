import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { FontTheme } from "../App";

export const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });


  const [font, setFont] = useContext(FontTheme);

  // handle the theme change
  // useEffect(() => {
  //
  //     document.body.className = theme;
  // }, [theme]);


  // handle the theme change
  useEffect(() => {
    if (theme === "light"){
      document.body.classList.remove(font.replace(/,/g, '-'));
      document.body.classList.remove("light");
    }else{
    document.body.className = theme;
    }
  }, [theme]);


  useEffect(() => {
    document.body.className = font;
  }, [font]);

  // handle the theme change
  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    console.log("new theme is ", newTheme)
    localStorage.setItem('theme', newTheme);
    console.log("theme changed");
  };

// handle the custome font
  const handleOptionChange = (event) => {
    const newFont = event.target.value;
    setFont(newFont);
    console.log("new font is ", newFont);
    localStorage.setItem('font', newFont);
    console.log("font changed");

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
              value={font}
              onChange={handleOptionChange}>
            <option value="default">default</option>
            <option value="lora">lora</option>
            <option value="open">sans</option>
            <option value="serif">serif</option>
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
