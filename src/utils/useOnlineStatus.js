import { useEffect, useState } from "react";


const useOnlineStatus = () => {
    // check if online status
    const [onlineStatus, setOnlineStatus] = useState(true);

    // window  add event listener 
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });



        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });
    }, []);


    // boolean value


    return onlineStatus;
};
export default useOnlineStatus;