import React from "react";
import MeaningList from "./MeaningList";
import "./Result";
import Synonym from "./Synonym";
import Anthonym from "./Anthonym";
import Example from "./Example";

export default function Result(props) {
    console.log(props)
  return (
    <div className="result container mx-auto p-4 max-w-2xl">
      <div className="flex gap-5 justify-center">
        <div className="right-content  flex flex-col gap-5">
          <Synonym synonyms={props.data.synonyms} />
          <Anthonym synonyms={props.data.anthonyms}/>
        </div>
        <div className="middle-content flex flex-col gap-5">
          <MeaningList mean={props.data.meanings} />

        </div>
        <div className="middle-content flex flex-col gap-5">
          <Example mean={props.data.meanings}/>

        </div>
      </div>
    </div>
  );
}
