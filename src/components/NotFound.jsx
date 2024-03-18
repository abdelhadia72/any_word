import React from "react";

export const NotFound = () => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl text-center mb-4">😵</h1>
      <h1 className="text-4xl text-center">No Definitions Found</h1>
      <p className="text-xl text-center mt-10">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};
