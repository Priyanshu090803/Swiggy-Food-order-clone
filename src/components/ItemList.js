const ItemList =({items})=>{
    console.log(items)
    return(
        <div>
            {
                items?.map((item)=>(
                    <div key={item?.card?.info?.id} className=" p-2 m-2 relative border-gray-200 border-b-2">
                    <div className=" p-2">
                        <span>{item?.card?.info?.name}</span>
                        
                        <span key={item?.card?.info?.id}> 
                        
                         -₹{item?.card?.info?.price ? 
                        (item?.card?.info?.price/100):
                        (item?.card?.info?.defaultprice/100)}
                        
                        </span>
                    </div>
                    <p className=" text-xs ml-2 text-rose-400">{item?.card?.info?.description}</p>

                 <button className=" w-16 h-8 top-8 rounded-lg cursor-pointer active:text-amber-200 right-4 absolute bg-black text-white">+Add</button>
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