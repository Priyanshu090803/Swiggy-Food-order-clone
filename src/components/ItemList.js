const ItemList =({items})=>{
    console.log(items)
    return(
        <div>
            {
                items?.map((item)=>(
                    <div key={item?.card?.info?.id || Math.random()}>
                    <div>
                        <span>{item?.card?.info?.name}</span>
                    </div>
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