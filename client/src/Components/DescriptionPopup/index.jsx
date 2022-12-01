import React, { useRef, useState } from "react";
import "./descriptionPopup.scss";

//not finished, need to make it with contentEditable.
export function DescriptionPopup(props) {
    const { editDescription } = props;


        // const inputRef = useRef(null); ref={inputRef}
    function saveDescription(){
        console.log({editDescription});
    }

    function handleChange(event){
        console.log(event.target.value);
    }

  return (
        <div className="descriptionPopup">
            <div contentEditable = "true" className="editInput"  type="text"  id="message" name="message" > 
                {editDescription}
             </div>
            <button className="saveBtn" onChange={handleChange} onClick = {saveDescription} >Save changes</button>
        </div>
  );

}

