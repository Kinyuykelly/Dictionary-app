import React from "react";
import MeaningList from "./MeaningList";
export default function Result(props) {
    console.log(props.data.meanings)
        return(
        <div className="result container mx-auto p-4 max-w-2xl">
           <div>
            <div className="right-content">

            </div> <div className="left-content">
            <h3>Meaning</h3>
            <MeaningList mean={props.data.meanings} />
            </div>
        
           {/* <h3>Meaning: {props.data.wordName}</h3>
            <h3>Example:</h3>
            <h3>Synonym:</h3>
            <h3>Antonym:</h3> */}
           </div>
        </div>
    )
}