import { useEffect, useState, createContext } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { NotFound } from "./components/NotFound";
import { Data } from "./components/Data";

export const WordData = createContext("hello");
export const ErrorContext = createContext(false);

function App() {
  const [data, setData] = useState("data :empty");
  const [pageError, setPageError] = useState(false);
  const [mounted, setMounted] = useState(false);

  return (
    <WordData.Provider value={[data, setData]}>
      <ErrorContext.Provider value={[pageError, setPageError]}>
        <div
          className={`min-h-screen md:px-0 px-4 bg-white py-20 transition-all dark:bg-[#13332e]`}>
          <div className="container max-w-[800px] mx-auto">
            <Navbar />
            <SearchBar />
            <Data />
            {pageError && <NotFound />}
            {console.log("from app error is ", pageError)}
          </div>
        </div>
      </ErrorContext.Provider>
    </WordData.Provider>
  );
}

export default App;
