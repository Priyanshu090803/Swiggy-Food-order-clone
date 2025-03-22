import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
// import Groceries from "./components/Groceries";

const Groceries = lazy(()=>import('./components/Groceries'))


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
      path:"/grocery",
      
      element: (
        <Suspense>
      <Groceries/>
      </Suspense>
      )
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