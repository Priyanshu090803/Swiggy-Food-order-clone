import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../../utils/cartSlice";

const Cart = ()=>{
    const cartItems= useSelector((store)=>store.cart.items)   // we are suscribing to the small portion of store which is good method for performance optimization, this selector is selecting the small portion of the app  
     // jis page mai show karana hota h wha pe useselector use hota h


    // we can also do
    // const store = useSelector((store)=>store);      // but here we subscribing to whole redux store which is not optimized method, less efficient   , tell this in inteview
    // const cartItems= store.cart.items
    
    const dispatch = useDispatch();
    handleClear=()=>{
        dispatch(clearItem())
    }
    return(
        <div className="text-center m-4 p-4">
            <h1 className=" text-2xl font-bold">Cart</h1>
            <div className=" w-6/12 m-auto ">
            <button className=" h-10  w-20 text-white rounded-xl bg-black"
            onClick={handleClear}
            >Clear Cart</button>
                {cartItems.length===0?(<h1>Add Items to your cart</h1>):(<ItemList items={cartItems}/> // Itemlist component ko reuse krre hai
            )}
            </div>
        </div>
    )
}
export default Cart;