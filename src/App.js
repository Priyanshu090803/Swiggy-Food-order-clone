<<<<<<< HEAD
import React, { lazy, Suspense, useEffect, useState } from "react";
=======
import React, { lazy, Suspense } from "react";
>>>>>>> 0e7021bcfe31c221556aeade70d6e296a049c5cc
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
<<<<<<< HEAD
import UserContext from "../utils/UserContext";
import {Provider} from 'react-redux'
import appStore from "../utils/AppStore";

const Groceries = lazy(()=>import('./components/Groceries'))
const About = lazy(()=>import("./components/About"))

const App = () => {
    const [userName,setUsername]= useState()
  useEffect(()=>{
    data={
      name:"Priyanshu"
    }
    setUsername(data.name)
  },[])
  return(
    <Provider store={appStore}>
  <UserContext.Provider value={{loggedInUser:userName, setUsername}}>
=======

const Groceries = lazy(()=>import('./components/Groceries'))


const App = () => {
  return(
>>>>>>> 0e7021bcfe31c221556aeade70d6e296a049c5cc
  <div className="app">
    <Header /> 
    <Outlet/>
  </div>
<<<<<<< HEAD
  </UserContext.Provider>
  </Provider>
=======
>>>>>>> 0e7021bcfe31c221556aeade70d6e296a049c5cc
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
<<<<<<< HEAD
        element:(
        <Suspense>
        <About/>
        </Suspense>

)},
=======
        element:<About/>
      },
>>>>>>> 0e7021bcfe31c221556aeade70d6e296a049c5cc
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