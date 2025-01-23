import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");


    // whenever statte variable update , react trigger a reconsiliation cycle (re render the component )
    console.log("body rendered");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log(json);
        // * optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    const onlineStatus = useOnlineStatus();
    if (onlineStatus == false)
        return (
            <h1>
                🔴 Offline, Please check your internet connection
            </h1>
        );


    // * Conditional Rendering
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer />;
    // }

    return listOfRestaurants.length == 0 ? (
        <Shimmer />
    ) : (
        <div className="body ">
            <div className="filter flex">
                <div className='search m-4 p-4 '>
                    <input type="text" placeholder="Search" className='search-box border border-solid border-black '
                        value={searchText}
                        onChange={(e) => {
                            // below code filtered the restaurant when we type on serach  box and when we clear the text it automatically
                            // goes back to their normal list 

                            const value = e.target.value;
                            setSearchText(value); // update the state
                            if (value.trim() === "") {
                                setFilteredRestaurant(listOfRestaurants);
                            } else {
                                const filteredList = listOfRestaurants.filter((res) =>
                                    res.info.name.toLowerCase().includes(value.toLowerCase())
                                );
                                setFilteredRestaurant(filteredList);

                            }

                        }} />
                    <button className="px-3 py-0.5 bg-green-500 m-4 text-white rounded-2xl "
                        onClick={() => {
                            console.log(searchText);

                            const filteredList = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurant(filteredList);
                        }
                        }




                    >
                        Search
                    </button>
                </div>
                <div className=" search m-6 p-4  ">
                    <button
                        className="filter-btn px-4 py-2 bg-gray-100 rounded-2xl"
                        onClick={() => {
                            // * Filter logic
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4.4

                            );

                            setListOfRestaurants(filteredList);

                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="res-container flex flex-wrap ">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id}
                        to={"/restaurant/" + restaurant.info.id}>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default Body;