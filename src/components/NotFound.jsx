import React from "react";

export const NotFound = () => {
  return (
    <div className="mt-20">
      <h1 className="text-5xl text-center mb-4 text-red-400 ">404</h1>
      <h1 className="text-4xl dark:text-white text-black transition-all text-center">
        No Definitions Found
      </h1>
      <p className="text-xl dark:text-white text-black transition-all text-center mt-10">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};
