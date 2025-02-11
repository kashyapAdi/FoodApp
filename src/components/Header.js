import { LOGO_URL } from '../utils/constants';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
    //   let btnName = 'Login';

    const [btnNameReact, setBtnNameReact] = useState('Login');


    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    // selector use karenge cart ke liye ,subscsribing to the store using useSelector
    const cartItems = useSelector((store) => store.cart.items);


    return (
        <div className="header flex justify-between bg-orange-500 shadow-lg sm:bg-blue-200 lg:bg-orange-400">
            <div className="logo-container w-30">
                <img src={LOGO_URL} alt="App Logo" className="logo w-24" />
            </div>
            <div className="nav-items flex items-center ">
                <ul className='flex gap-5 p-4 m-4 '>
                    <li>
                        Online status: {onlineStatus ? '✅' : '🔴'}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className='font-bold'>
                        <Link to="/cart">Cart -({cartItems.length} items)</Link>
                    </li>

                    <button
                        className="loginBtn flex items-center"
                        onClick={() => {
                            //   btnName = 'Logout';
                            btnNameReact === 'Login'
                                ? setBtnNameReact('Logout')
                                : setBtnNameReact('Login');
                            console.log(btnNameReact);
                        }}
                    >
                        {btnNameReact}
                        <li className='px-4 font-bold flex '>{loggedInUser}</li>
                    </button>
                </ul>
            </div>
        </div >
    );
};

export default Header;