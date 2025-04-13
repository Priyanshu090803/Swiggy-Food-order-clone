import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"Cart",
    initialState:{
        items: ["burgur","pizza","sandwhich"]             // cart items initially they are empty
    },
    reducers:{
        addItem:(state,action)=>{                               // addItem is a reducer function but it will map to an action
            // state will help to change the state of  initialstate where is items  
            // mutating the stating here (modifying)
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearItem:(state)=>{
            state.items.length=0;
        }
    }
})

export const{addItem,removeItem,clearItem} = cartSlice.actions;

export default cartSlice.reducer;


