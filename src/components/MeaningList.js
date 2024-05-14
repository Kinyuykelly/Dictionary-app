import React from "react";
import "./MeaningList.css"
export default function meaningsList(props) {
function titlecase(str) {
        return (
            str.charAt(0).toUpperCase() + str.slice(1)
        );
    } 
  return (
    <div className="meaning">
     <h3 className="text-center font-bold text-xl">Meaning</h3>
     {props.mean.map(function(meanings, index) {
        if (index < 6) {
          return (
            <div key={index}>
              <h4 className="font-bold">{titlecase(meanings.partOfSpeech)}</h4>
              {meanings.definitions.map(function (definition, idx) {
                if (idx < 3) {
                  return (
                    <div key={idx}>
                      <p>{definition.definition}</p>
                    </div>
                  );
                }
              })}
            </div>
          );
        }
      })}
    </div>
  );
}
