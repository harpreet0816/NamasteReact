import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
  };

const RestaurantCard = (props) => {
    // console.log(props);
    //******  somelike this {resName, cuisine} then on the write only <h1>{resName}<h1>*
    //console.log(props);*****************
    return (
      <div className="res-card" style={styleCard}>
        <img
          className="res-logo"
          alt="res-logo"
          src={
            CDN_URL +
            props.img
          }
        ></img>
        <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h4>{props.costForTwo}</h4>
        <span>{props.rating} "stars"</span>
        <span> 38 minutes</span>
      </div>
    );
  };
export default RestaurantCard;
