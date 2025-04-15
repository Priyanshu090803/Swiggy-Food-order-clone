import { configureStore } from '@reduxjs/toolkit';
import cartReducer  from './cartSlice'

const appStore= configureStore({
    reducer:{                                // if we modify the big store it also have reducer  and reducer combine the reducers of the slices
        // this reducer will modify the appstore . this reducer is our app's big reducer 
        cart:cartReducer        // and it consists of small reducers from different slices    
    }
})
export default appStore;






// our app have one big reducer for all different  reducers








