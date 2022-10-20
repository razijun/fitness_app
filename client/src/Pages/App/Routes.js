import { Login } from "../Login";
import { SignUp } from "../SignUp";
import { Homepage } from "../Homepage";
import { PageContent } from "../PageContent";
import { Layout } from "../Layout";
import { NoPage } from "../NoPage";
import { StartWorkout } from "../StartWorkout";
import { Workout } from "../Workout";
import { DescriptionPopup } from "../../Components/DescriptionPopup";

const routes = [
  { path: "/", element: <Layout /> },
  { path: "homepage", element: <Homepage /> },
  { path: "login", element: <Login /> },
  { path: "signup", element: <SignUp /> },
  { path: "workout", element: <PageContent />,
    children:[
      {path: "workout/select", element: <Workout/>},
      {path: "workout/start", element: <StartWorkout />},
    ] },
  { path: "popup", element: <DescriptionPopup/> },
  { path: "*", element: <NoPage /> },

];

export default routes;
