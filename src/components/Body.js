import RestaurantCard from "./RestaurantCard";
import RestaurantCardLast from "./RestaurantCardLast";
import { dataList, dataObj, data3 } from "../utils/mockData";
import { useState } from "react";

// <button className="filter-btn" onClick={filterTopRatedRestaurants}>Top Rated restaurant</button>
// const filterTopRatedRestaurants = () => {
//   const dataList1 = dataList.filter((restaurant) => { console.log(restaurant.name, ">>>>>>>>");
//   return restaurant.avgRating > 4.3 ;});
//   console.log(typeof dataList1)
//   console.log(dataList1)
//  dataList1.forEach(function(data, ind){
//     console.log(data.name,">>>>>>csd")
//   })

// };

const Body = () => {
  // Local state varaible - Super powerful varaible
  let [listOfResturants, setlistOfResturants] = useState(dataList);

  // behind the scenes 
  // const arr = useState(ressList);   const [listOfResturants, setlistOfResturants] = arr
  // const [listOfResturants] = arr[0]
  // const [setlistOfResturants] = arr[1]
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.avgRating > 4.3
            );
            setlistOfResturants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani, North Indian, Asian"
          img="v9fczzlua1wnrx63fh1g"
          rating={4.9}
          costForTwo={"₹" + 510 + " For Two"}
        />
        <RestaurantCard
          resName={dataObj.info.name}
          cuisine={dataObj.info.cuisines.join(", ")}
          rating={dataObj.info.avgRating}
          costForTwo={dataObj.info.costForTwo}
          img={dataObj.info.cloudinaryImageId}
        />
        <RestaurantCard
          resName={dataObj.info1.name}
          cuisine={dataObj.info1.cuisines.join(", ")}
          rating={dataObj.info1.avgRating}
          costForTwo={dataObj.info1.costForTwo}
          img={dataObj.info1.cloudinaryImageId}
        />
        <RestaurantCard
          resName={dataObj.info2.name}
          cuisine={dataObj.info2.cuisines.join(", ")}
          rating={dataObj.info2.avgRating}
          costForTwo={dataObj.info2.costForTwo}
          img={dataObj.info2.cloudinaryImageId}
        />
        <RestaurantCard
          resName={dataObj.info3.name}
          cuisine={dataObj.info3.cuisines.join(", ")}
          rating={dataObj.info3.avgRating}
          costForTwo={dataObj.info3.costForTwo}
          img={dataObj.info3.cloudinaryImageId}
        />
        <RestaurantCard
          resName={dataObj.info4.name}
          cuisine={dataObj.info4.cuisines.join(", ")}
          rating={dataObj.info4.avgRating}
          costForTwo={dataObj.info4.costForTwo}
          img={dataObj.info4.cloudinaryImageId}
        />
        <RestaurantCard
          resName={dataObj.info5.name}
          cuisine={dataObj.info5.cuisines.join(", ")}
          rating={dataObj.info5.avgRating}
          costForTwo={dataObj.info5.costForTwo}
          img={dataObj.info5.cloudinaryImageId}
        />
        <RestaurantCard
          resName={dataObj.info6.name}
          cuisine={dataObj.info6.cuisines.join(", ")}
          rating={dataObj.info6.avgRating}
          costForTwo={dataObj.info6.costForTwo}
          img={dataObj.info6.cloudinaryImageId}
        />
        <RestaurantCard
          resName={dataObj.info7.name}
          cuisine={dataObj.info7.cuisines.join(", ")}
          rating={dataObj.info7.avgRating}
          costForTwo={dataObj.info7.costForTwo}
          img={dataObj.info7.cloudinaryImageId}
        />
        <RestaurantCard
          resName={dataObj.info8.name}
          cuisine={dataObj.info8.cuisines.join(", ")}
          rating={dataObj.info8.avgRating}
          costForTwo={dataObj.info8.costForTwo}
          img={dataObj.info8.cloudinaryImageId}
        />
        <RestaurantCard
        resName={dataObj.info9.name}
        cuisine={dataObj.info9.cuisines.join(", ")}
        rating={dataObj.info9.avgRating}
        costForTwo={dataObj.info9.costForTwo}
        img={dataObj.info9.cloudinaryImageId}
        />
        {dataList.map((restaurant) => (
          <RestaurantCardLast key={restaurant.id} resData={restaurant} />
        ))}
        {data3.map((restaurant) => (
          <RestaurantCardLast key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
