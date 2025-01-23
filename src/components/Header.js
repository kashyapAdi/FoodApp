import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    //   let btnName = 'Login';

    const [btnNameReact, setBtnNameReact] = useState('Login');
    console.log('header render');

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header flex justify-between bg-orange-500 shadow-lg sm:bg-blue-200 lg:bg-green-400">
            <div className="logo-container">
                <img src={LOGO_URL} alt="App Logo" className="logo w-20" />
            </div>
            <div className="nav-items ">
                <ul className='flex  gap-10 p-4 m-4 '>
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
                    <li>Cart</li>
                    <button
                        className="loginBtn"
                        onClick={() => {
                            //   btnName = 'Logout';
                            btnNameReact === 'Login'
                                ? setBtnNameReact('Logout')
                                : setBtnNameReact('Login');
                            console.log(btnNameReact);
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;