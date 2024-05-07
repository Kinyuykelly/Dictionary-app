import React from "react";
import { useState } from "react";
import Result from "./Result";
import axios from "axios";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [wordData, setWordData] = useState({ ready: false });

  const handleResponse = (response) => {
    setWordData({
      ready: true,
      wordName: response.data[0].word,
      meanings: response.data[0].meanings,
      antonyms: response.data[0].meanings[0].antonyms,
      synonyms: response.data[0].meanings[0].synonyms,
      phoenetic: response.data[0].phoenetic,
    });
  };

  const handleInputChange = (event) => {
    setWord(event.target.value);
  };

  const search = () => {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      setWord(event.target.value);
    }
  };

  return (
    <div className="header">
      <div className="bg-orange-100">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold text-center text-white">
            {" "}
            Simple Dictionary{" "}
          </h1>
          <p className="text-center mt-1 mb-10 text-slate-300 text-lg">
            Find definitions for words
          </p>
          <div className="flex items-center justify-center mt-5">
            <form
              className="flex border-2 border-gray-200 rounded sm:w-30"
              onSubmit={handleSubmit}
            >
              <input
                className="px-4 py-2 md:w-80" 
                type="search"
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                placeholder="Search..."
              />
              <button
                type="submit"
                className="bg-orange-400 border-z py-2 text-white w-40"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      {wordData.ready ? (
        <div>
          <h3 className="text-center mt-4">
            Result for:{" "}
            <span className="font-bold">{wordData.wordName}</span>
          </h3>
          <Result data={wordData} />
        </div>
      ) : (
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Enter a word to search for its definition.
          </p>
        </div>
      )}
    </div>
  );
}
