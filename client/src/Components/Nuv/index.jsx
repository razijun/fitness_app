import React, {useState} from "react";

const Nuv = ()=> {
    const [name, setName] = useState("Lior1")
    const onclick = () =>{
       setName("Lior3") 
    //    setName == name = "Lior3"
    }
    return(
        <div className="nuv_bar">
            {name}
            <button onClick={onclick}>press</button>
        </div>
    )
};
export default Nuv;   