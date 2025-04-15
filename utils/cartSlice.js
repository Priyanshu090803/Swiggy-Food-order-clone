import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice= createSlice({
    name:"Cart",
    initialState:{
        items: []             // cart items initially they are empty
    },
    reducers:{
        addItem:(state,action)=>{                               // addItem is a reducer function but it will map to an action
            // state will help to change the state of  initialstate where is items  
            // mutating the stating here (modifying)
            state.items.push(action.payload)
         
            // OLDER VERSION OF REDUX => VANILLA REDUX;
            // const newState=[...state];
            // newState.items.push(action.payload)
            // return newState
            
            // now redux do this thing in behind the scene🤣
        
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearItem:(state)=>{
            state.items.length=0;
            //OR
            //  return{items: []};      // this new {object} will be replaced  inside originalState={items:[]}

            // What reduxToolkit says=> either mutate the existing state or return a new state::    





            // why we didn't do this  state=[],
            // bcx this is local variable/ copy,

            //eg: originalState=['pizza','burgur'],
            
            // conosole.log(state) => yha pe value pizza,burgur   hogi
            
            // state=[]           => yha empty kr diya value
            
            // console.log(state) => yha empty dikhaega
            
            
            // BUTTT! ORIGINAL STATE ABHI BHI=> originalState=['pizza','burgur']      YE HI HOGI KUKI state=[] isne locally khali kiya  but mutate krke original ko empty ni kr paya


        }
    }
})

export const{addItem,removeItem,clearItem} = cartSlice.actions;

export default cartSlice.reducer;          // this reducer is the combo of upr k all the reducers


