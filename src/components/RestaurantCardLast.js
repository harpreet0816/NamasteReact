import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
  };
const RestaurantCardLast = (props) => {
    const { resData } = props; // should have to  use resNamez here only because you have resNamezz there so be careful
    //console.log(resData);
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;
    //console.log(cloudinaryImageId, name, cuisines, avgRating, costForTwo);
  
    return (
      <div className="res-card" style={styleCard}>
        <img
          className="res-logo"
          alt="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <span>{avgRating} "stars"</span>
        <span> 38 minutes</span>
      </div>
    );
  };
  export default RestaurantCardLast;