import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla: { deliveryTime },
    } = resData?.info;

    return (
        <div
            className="res-card m-4 p-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-200"

        >
            <img
                className="res-logo rounded-lg w-[250px] h-[200px]"
                src={CDN_URL + cloudinaryImageId}
                alt="Biryani"
            />

            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}minutes</h4>
        </div>
    );
};

export default RestaurantCard;