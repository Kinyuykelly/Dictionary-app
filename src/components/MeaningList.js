import React from "react"

export default function MeaningList(props){
    console.log(props.mean)
   return(
    <div>
        {props.mean.map(function(definitions, index){
            return(
                <div key={index}>
                    <li className="text-dark">
                        
                        {definitions.definition}
                    </li>
                </div>
            )
        })}
        {/* {mean.map(val => val.meanings.map(mean.definitions.map(def => (
            <div key={def.definition}>
                <li >
                    {def.definition}
                </li>
            </div>
        ))))} */}
    </div>
   );
}