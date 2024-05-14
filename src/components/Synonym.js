import React from "react";
import "./Synonym.css"

export default function Synonym(props){
    console.log(props)
    return(
        <div className="synonym">
        <h3 className="text-center font-bold text-xl">Synonyms</h3>
        {props.synonyms.length > 0 ? (
            props.synonyms.map(function(synonym, index){
                return(
                    <div key={index}>
                    <li>{synonym}</li>
                </div>
                )
})
        ) : (
            <div>No synonyms found</div>
        )}
    </div>
);
}