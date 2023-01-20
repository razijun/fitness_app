import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Layout } from "../Layout";
import { Homepage } from "../Homepage";
import { Login } from "../Login";
import { SignUp } from "../SignUp";
import { PageContent } from "../PageContent";
import { Workout } from "../Workout";
import { StartWorkout } from "../StartWorkout";
import { DescriptionPopup } from "../../Components/DescriptionPopup";
import { NoPage } from "../NoPage";


export function App() {
  

  return (
      <BrowserRouter>
        <Routes>
            <Route  path = "/"  element = {<Homepage/>}/>      
             <Route path= "layout" element= {<Layout /> }/>
             <Route path= "login"    element= {<Login /> }/>
             <Route path= "signup"   element= {<SignUp /> }/>
             <Route  path= "workout"   element= {<PageContent/>}>
                  <Route index element= {<Workout/>}/>
                  <Route  path= "start" element= {<StartWorkout />}/>
             </Route>
             <Route path= "popup" element = {<DescriptionPopup/>}/> 
             <Route path= "*" element = {<NoPage/> }/>
        </Routes>
      </BrowserRouter>
  );
}



