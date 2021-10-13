import React from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";
import { GoDashboard } from 'react-icons/go';
import { FaRegUserCircle } from 'react-icons/fa';
import { HiOutlineBookmarkAlt } from 'react-icons/hi';

export default function navbar() {
    return (
        // <nav>
        <div className="nav">
            <ul>
                <li>
                    <Link to="/signin/Signin" className="nav-link logo" exact>
                        Neo Party
                    </Link>
                </li>
                <li>
                    <Link to="/signup/Signup" className="nav-link" exact>
                        <GoDashboard /> Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/signin/Signin" className="nav-link" exact>
                        <FaRegUserCircle />Profile
                    </Link>
                </li>
                <li>
                    <Link to="/signin/Signin" className="nav-link" exact>
                        <HiOutlineBookmarkAlt />Booking
                    </Link>
                </li>
                <li>
                    <Link to="/signup/Signup" className="nav-link nav-link-right" exact>
                        Logout
                    </Link>
                </li>
                {/* <li>
                    <Link to="/signin/Signin" className="nav-link nav-link-right" exact>
                        Signin
                    </Link>
                </li>
                <li>
                    <Link to="/signup/Signup" className="nav-link nav-link-right" exact>
                        Signup
                    </Link>
                </li> */}
            </ul>
        </div>
        // </nav>
    );
}
