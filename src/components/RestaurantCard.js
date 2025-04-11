import { CDN_URL } from "../../utils/contants";
<<<<<<< HEAD
const RestaurantCard = ({ResData}) => {
    // const { ResData } = props;
=======
const RestaurantCard = (props) => {
    const { ResData } = props;
>>>>>>> 0e7021bcfe31c221556aeade70d6e296a049c5cc
    const {
      // cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = ResData?.info;
    return (
      
      <div className="res-card w-64 p-8 rounded-2xl h-96 bg-rose-100">
        <img
          className="res-logo w-full h-2/3 rounded-2xl bg-cover bg-no-repeat  bg-center"
          src={
            CDN_URL +
            ResData.info.cloudinaryImageId
          }
        />
        <h3 className=" text-base my-0.5">{name}</h3>
        <h4 className=" text-xs my-0.5">{cuisines.join(", ")}</h4>
        <h4 className="text-lg">{avgRating}</h4>
        <h4 className=" text-base">{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    );
  };
  // Higher order function:
  export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
      return(
        <div>
          <label className=" absolute bg-green-500 w-12 h-6 rounded-md text-center ">veg</label>
          <RestaurantCard{...props}/>
        </div>
      )
    }
  }

export default RestaurantCard;