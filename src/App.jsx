import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { NotFound } from "./components/NotFound";
import { createContext } from "react";
import { Data } from "./components/Data";

export const WordData = createContext("hello data");

function App() {
  const [data, setData] = useState("data :eee");
  return (
    <WordData.Provider value={[data, setData]}>
      <div className="min-h-screen bg-white py-20 transition-all dark:bg-[#13332e]">
        <div className="container max-w-[800px] mx-auto">
          <Navbar />
          <SearchBar />
          <Data />
          {/* <NotFound /> */}
        </div>
      </div>
    </WordData.Provider>
  );
}

export default App;
