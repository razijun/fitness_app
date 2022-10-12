import { Login } from "../Login";
import { SignUp } from "../SignUp";
import { Homepage } from "../Homepage";
import { PageContent } from "../PageContent";
import { Layout } from "../Layout";
import { NoPage } from "../NoPage";

const routes = [
  { path: "/", element: <Layout /> },
  { path: "homepage", element: <Homepage /> },
  { path: "login", element: <Login /> },
  { path: "signup", element: <SignUp /> },
  { path: "workout", element: <PageContent /> },
  { path: "*", element: <NoPage /> },
];

export default routes;
