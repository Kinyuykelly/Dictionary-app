import React from "react";
import "./Example.css";

export default function Example(props) {
    console.log(props);
    return (
        <div className="example">
            <h3 className="text-center font-bold text-xl">Examples</h3>
            {props.mean.map(function(meanings, index) {
                return (
                    <div key={index}>
                        {meanings.definitions.map(function(definition, idx) {   
                            if (definition.example ) {
                                return (
                                    <div key={idx}>
                                        <li>{definition.example}</li>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                );
            })}
        </div>
    );
}
