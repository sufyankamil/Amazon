import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=" Failed " />
            </Link>
            <div className="header__nav">
                <div className="location">
                    <RoomRoundedIcon />
                </div>
                <div className="header__option">
                    <span className="header__option1"> Hello </span>
                    <span className="header__option2"> Select Your Address </span>
                </div>
            </div>
            <div className="header__search">

                <div className="list">
                    <label>
                        <select className="listItem">
                            <option>All Product</option>
                            <option>Deals</option>
                            <option>Alexa Skills</option>
                            <option>Amazon Devices</option>
                            <option>Amazon Fashion</option>
                            <option>Amazon Fresh</option>
                            <option>Amazon Pantry</option>
                            <option>Appliances</option>
                            <option>Apps & Games</option>
                            <option>Baby</option>
                            <option>Books</option>
                            <option>Beauty</option>
                            <option>Car & Motorbikes</option>
                            <option>Clothing & Accessories</option>
                            <option>Collectibles</option>
                            <option>Computer & Accessories</option>
                        </select>
                    </label>
                </div>
                <input className="header__searchInput " type="text " />
                <SearchIcon className="header__searchIcon" />
            </div>


            <div className="header__nav">
                <div className="header__option">
                    <span className="header__option1"> Hello </span>
                    <span className="header__option2"> Sign In </span>
                </div>

                <div className="header__option">
                    <span className="header__option1"> Return</span>
                    <span className="header__option2"> Order </span>
                </div>

                <div className="header__option">
                    <span className="header__option1">Your </span>
                    <span className="header__option2">Cart</span>

                </div>
                <Link to="/checkout">
                    <div className="header__Cart" >
                        <ShoppingCartIcon />
                        <span className="header__option2 header__Zero">0</span>
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default Header;
