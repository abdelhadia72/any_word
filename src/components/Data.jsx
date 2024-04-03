import React, { useState } from "react";
import { useContext } from "react";
import { WordData } from "../App";
import { ErrorContext } from "../App";

export const Data = () => {
  const [dataValue, setDataValue] = useContext(WordData);
  const [pageError, setPageError] = useContext(ErrorContext);

  // to handle the audio if we don't find it int zero index we go till 3 maybe I'll make it daynamic later
  const playAudio = () => {
    if (dataValue[0].phonetics[2] && dataValue[0].phonetics[2].audio) {
      new Audio(dataValue[0].phonetics[2].audio).play();
    } else if (dataValue[0].phonetics[0] && dataValue[0].phonetics[0].audio) {
      new Audio(dataValue[0].phonetics[0].audio).play();
    } else if (dataValue[0].phonetics[1] && dataValue[0].phonetics[1].audio) {
      new Audio(dataValue[0].phonetics[1].audio).play();
    }
  };

  try {
    return (
      <div className={` transition-all`}>
        <div className="holder p-2 py-10">
          <div className="word flex justify-between items-center">
            <h1 className="md:text-8xl text-6xl dark:text-white transition-all capitalize">
              {dataValue[0].word}
            </h1>
            <div
              onClick={playAudio}
              className="image-play bg-green-400 p-4 rounded-full cursor-pointer active:scale-90 transition-all">
              <img
                className="size-8  transition-all relative left-[2px]"
                src="/src/assets/play.png"
                alt="play.png"
              />
            </div>
          </div>
          <h2 className="text-green-400 text-3xl mt-2 ml-4">
            {dataValue[0].phonetics[1].text}
          </h2>
          <div className="allInfo mt-10">
            {dataValue[0].meanings.map((e) => {
              <div className="cell flex justify-between items-center gap-5">
                <h3 className="text-xl">{e.partOfSpeech}</h3>
              </div>;
            })}
            {dataValue[0].meanings.map((e, index) => (
              <div className="holer transition-all" key={index}>
                <div className="cell flex justify-between transition-all  mt-6 items-center gap-5">
                  <h3 className="uppercase text-gray-800 transition-all  dark:text-gray-200 font-bold text-sm">
                    {e.partOfSpeech}
                  </h3>
                  <div className="line h-[2px] w-full transition-all dark:bg-white bg-black"></div>
                </div>
                <h2 className="title uppercase mb-4 mt-2 ml-4 transition-all font-bold text-gray-500 dark:text-gray-300">
                  meanings
                </h2>
                <ul className="definitions mt-4 ">
                  {e.definitions?.map((e, index) => (
                    <div className="holder">
                      <li className="ml-8 flex items-center dark:text-white transition-all gap-4 my-2">
                        <div className="dot size-1 rounded-full bg-green-600"></div>
                        <p key={index}>{e.definition}</p>
                      </li>
                      <p className="ml-20 text-gray-800 dark:text-gray-300 transition-all font-bold">
                        {e.example}
                      </p>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log("here we get 09", pageError);
    setPageError(true);
  }
};
