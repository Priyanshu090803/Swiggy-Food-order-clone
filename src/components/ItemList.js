import { CDN_URL } from "../../utils/contants"
const ItemList =({items})=>{
    console.log(items)
    return(
        <div>
            {
                items?.map((item)=>(
                    <div key={item?.card?.info?.id} className=" p-2 m-2 relative border-gray-400 border-b-2">
                    <div className=" p-2 w-3/4">
                        <span className=" text-xl font-bold">{item?.card?.info?.name}</span>
                        
                        <span key={item?.card?.info?.id} className=" text-green-600"> 
                        
                         -₹{item?.card?.info?.price ? 
                        item?.card?.info?.price/100:
                        item?.card?.info?.defaultPrice/100}
                        
                        </span>
                    <p className=" text-xs mx-2 text-black">{item?.card?.info?.description}</p>

                    </div>
                    <img src={CDN_URL+item.card.info.imageId} className=" w-18 h-14 right-4 absolute top-0 bg-center bg-cover rounded-lg"/>

                 <button className=" w-12 h-6 top-0 hover:text-red-300 rounded-lg text-sm cursor-pointer active:text-amber-200 right-7 absolute bg-gray-800 text-white">+Add</button>
                    </div>

                ))
            }
        </div>
    )
}
export default ItemList

// const ItemList = ({ items }) => {
//     console.log(items); // First check what the actual structure is
    
//     return (
//         <div>
//             {items?.map((item) => (
//                 <div key={item?.card?.info?.id || Math.random()}>
//                     <div>
//                         <span>{item?.card?.info?.name}</span>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ItemList;