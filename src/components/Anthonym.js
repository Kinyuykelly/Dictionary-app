import React from "react";
import "./Anthonym.css"

export default function Anthonym(props){
    console.log(props)
    return(
        <div className="anthonym">
        <h3 className="text-center font-bold text-xl">Anthonyms</h3>
        {props.anthonyms? (
            props.anthonyms.map(function(anthonym, index){
               if(index < 7){
                return(
                    <div key={index}>
                    <li>{anthonym}</li>
                </div>
                )
               }
})
        ) : (
            <div>No anthonyms found</div>
        )}
    </div>
);
}