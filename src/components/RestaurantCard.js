import { CDN_URL } from "../../utils/contants";
const RestaurantCard = (props) => {
    const { ResData } = props;
    const {
      // cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = ResData?.info;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        {/* <h3>{ResData.info.name}</h3>
              <h4>{ResData.info.cuisines.join(", ")}</h4>
              <h4>{ResData.info.avgRating}</h4>
              <h4>{ResData.info.costForTwo}</h4>
              <h4>{ResData.info.deliveryTime}</h4> */}
        <img
          className="res-logo"
          src={
            CDN_URL +
            ResData.info.cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    );
  };
export default RestaurantCard;