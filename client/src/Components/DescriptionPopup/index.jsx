import React, { useRef, useState } from "react";
import "./descriptionPopup.scss";

//not finished, need to make it with contentEditable.
export function DescriptionPopup() {
        const inputRef = useRef(null);
    function log(){
        console.log(inputRef.current.value);
    }

    
  return (
        <div className="descriptionPopup">
            <div contentEditable = "true" className="editInput" ref={inputRef} type="text"  id="message"
        name="message" >  </div>
            <button className="saveBtn" onClick = { log} >Save changes</button>
        </div>
  );

}

