import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RestaurantMenu = () => {


    const { resId } = useParams();
    //    here we are using useRestaurantMenu custom hook  to fetch the menu items
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null); // to show the first category





    if (resInfo === null) return <Shimmer />;

    const { name, cuisines,
        costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories); // this is the array of categories


    return (
        <div className="menu text-center ">

            <h1 className="font-bold my-9 text-2xl">{name}</h1>
            <p className="font-bold text-lg my-2">
                {cuisines.join(", ")}-{costForTwoMessage}
            </p>
            {categories.map((category, index) => (
                <RestaurantCategory key={category?.card?.card.title}
                    data={category?.card?.card}
                    showItems={index == showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    );
};
export default RestaurantMenu;