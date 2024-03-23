import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { NotFound } from "./components/NotFound";
import { createContext } from "react";
import { Data } from "./components/Data";

export const WordData = createContext("hello data");

// this is for the font change
export const FontTheme = createContext( () =>{

  return localStorage.getItem('font') || 'sans';
}
)

function App() {
  const [data, setData] = useState("data :eee");
  const [font, setFont] = useState(() =>{
    return localStorage.getItem('font') || 'sans';
  });

  return (
    <WordData.Provider value={[data, setData]}>
      <FontTheme.Provider value={[font, setFont]}>
      <div className={`min-h-screen font[${font}] bg-white py-20 transition-all dark:bg-[#13332e]`}>
        <div className="container max-w-[800px] mx-auto">
          <Navbar />
          <SearchBar />
          <Data />
          {/*<NotFound /> */}
        </div>
      </div>
      </FontTheme.Provider>
    </WordData.Provider>
  );
}

export default App;
