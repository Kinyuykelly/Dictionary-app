import React from "react"

export default function meaningsList(props){
   return(
    <div className="">
        {props.mean.map((meanings, index) =>(
            <div key={index}>
               <h4>{meanings.partOfSpeech}</h4> 
               {meanings.definitions.map((definition, idx) => (
                                <div key={idx}>
                                    <p>{definition.definition}</p>
                                </div>
                            ))}
            </div>
        )
    )}
    </div>
   );
}