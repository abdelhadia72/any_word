import React, { useState, useEffect } from "react";
import { useContext } from "react";

export const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // handle the theme change
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // handle the theme change
  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="logo cursor-pointer">
        <img className="max-w-14" src="/src/assets/logo.png" alt="logo.png" />
      </div>
      <div className="rightSide flex gap-10 justify-between items-center">
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
