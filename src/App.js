import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const App = () => {
  return(
  <div className="app">
    <Header /> 
    <Body />
  </div>
  ) 
};
const AppRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:"/about",
    element:<About/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<RouterProvider router={AppRouter}/> )
// export {
//   createBrowserRouter,
//   RouterProvider,
// };