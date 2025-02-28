import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import Cart from "./components/Cart";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantMenu from "./components/RestaurantMenu";

const App = () => {
  return(
  <div className="app">
    <Header /> 
    <Outlet/>
  </div>
  ) 
};
const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element: <Body />

      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:"/contact",
        element:<ContactUs/>
      },
      {
        path:"/cart",
        element: <Cart/>
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ]
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<RouterProvider router={appRouter}/>)