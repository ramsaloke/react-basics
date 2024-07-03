import React from "react";

function handledbclick() {
    console.log("You double clicked me!");
}
 
function hello(){
    console.log("hello world")
}
export default function Button() {
    return (  
        <div>
            <button onDoubleClick={handledbclick}>double click me!</button>

            <button onClick={hello}>click me!</button>
        </div>
    );
}
