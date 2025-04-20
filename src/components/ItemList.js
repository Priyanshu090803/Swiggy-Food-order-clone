import { CDN_URL } from "../../utils/contants"
import {addItem} from "../../utils/cartSlice"
import { useDispatch } from "react-redux"


const ItemList =({items})=>{
    const dispatch = useDispatch();
    const handleAdd=(item)=>{
        dispatch(addItem(item))  // from here we dispatching the items to cart slice and and filling its action.payload
    }
    return(
        <div>
            {
                items?.map((item)=>(
                    <div key={item?.card?.info?.id} className=" p-2 m-2 relative border-gray-400 border-b-2">
                    <div className=" p-2 w-3/4">
                        <span className=" text-xl font-bold">{item?.card?.info?.name}-</span>
                        
                        <span key={item?.card?.info?.id} className=" font-bold text-green-600"> 
                        
                         ₹{item?.card?.info?.price ? 
                        item?.card?.info?.price/100:
                        item?.card?.info?.defaultPrice/100}
                        
                        </span>
                    <p className=" text-xs mx-2 text-black ">{item?.card?.info?.description}</p>

                    </div>
                    <img src={CDN_URL+item.card.info.imageId} className=" w-18 h-14 right-0 absolute top-20 md:top-0 bg-center bg-cover rounded-lg"/>

                 <button
                  className=" w-12 h-6 top-20 md:top-0 hover:text-red-100 rounded-lg text-sm cursor-pointer active:text-amber-200 right-3 md:right-7 absolute bg-gray-800 text-white"
                  onClick={()=>handleAdd(item)}>+Add</button>
                    </div>

                ))
            }
        </div>
    )
}
export default ItemList
