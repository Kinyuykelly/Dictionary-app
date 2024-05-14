import React from "react";
import { useState } from "react";
import Result from "./Result";
import axios from "axios";
import "./Dictionary.css"
import Logo from "../assets/find-book-icon.svg"

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [wordData, setWordData] = useState({ ready: false });

  const handleResponse = (response) => {
    setWordData({
      ready: true,
      wordName: response.data[0].word,
      meanings: response.data[0].meanings,
      anthonyms: response.data[0].meanings[0].anthonyms,
      synonyms: response.data[0].meanings[0].synonyms,
      example: response.data[0].meanings,
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

  function titlecase(str) {
    return (
        str.charAt(0).toUpperCase() + str.slice(1)
    );
} 

  return (
    <div className="dictionary">
      <div className="header">
        <div className="container mx-auto py-8">
          <div className="flex justify-center gap-1">
           <img className="logo" src={Logo} alt="logo" />
          <h1 className="text-3xl font-bold text-center text-white">
            {" "}
            Simple Dictionary{" "}
          </h1>
          </div>
          <p className="text-center mt-1 mb-10 text-slate-300 text-lg">
            Find definitions for words
          </p>
          <div className="flex items-center justify-center mt-5">
            <form
              className="flex border-2 border-white rounded sm:w-30"
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
                className="button border-z py-2 text-white w-40"
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
            Result for {" "}:{"  "}
            <span className="font-bold">{titlecase(wordData.wordName)}</span>
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
