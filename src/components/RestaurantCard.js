import { CDN_URL } from "../../utils/contants";
const RestaurantCard = ({ResData}) => {
    // const { ResData } = props;
    const {
      // cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = ResData?.info;
    return (
      
      <div className="res-card flex flex-col  gap-2 rounded-2xl p-4 w-50 h-96 mt-3  md:w-64 md:py-4 md:px-8   md:h-96 bg-rose-100 shadow-lg shadow-red-200">
        <img
          className="res-logo w-40 h-40 hover:scale-105 transition-all md:w-48 md:h-48 rounded-2xl bg-cover bg-no-repeat  bg-center "
          src={
            CDN_URL +
            ResData.info.cloudinaryImageId
          }
        />
        <div className="  h-full flex flex-col gap-1">
        <h3 className=" text-sm my-0.5 text-red-900 font-bold">{name}</h3>
        <h4 className=" text-xs my-0.5">{cuisines.join(", ")}</h4>
        <h4 className="text-lg">{avgRating}</h4>
        <h4 className=" text-base text-green-600 font-bold">{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
      </div>

    );
  };
  // Higher order function:
  export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
      return(
        <div>
          <label className=" z-20 absolute bg-green-500 w-12 h-6 rounded-md text-center ">veg</label>
          <RestaurantCard{...props}/>
        </div>
      )
    }
  }

export default RestaurantCard;