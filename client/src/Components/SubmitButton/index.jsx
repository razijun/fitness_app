import React from "react";
import "./_SubmitButton.scss";

export function SubmitButton(props){
    const {label="Submit"} = props;
    return(
        <button className="submit">{label}</button>
    )
}

