import React from "react";
import "./css/editProfile.css";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowBack } from 'react-icons/io';

export default function editProfile(){
        return (
            <div className="main">
                <Navbar />
                <form id="signup">
                    <button type="submit" className="back">
                        <IoIosArrowBack /> Back
                    </button>
                    <br />
                    <label>Name</label>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Name" />
                    </div>

                    <label>Email</label>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Enter Email" />
                    </div>

                    <label>Mobile Number</label>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Mobile Number" />
                    </div>

                    <label>Password</label>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Enter Password" />
                    </div>

                    <label>Company Name</label>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Company Name" />
                    </div>

                    <label>Company Address</label>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Company Address" />
                    </div>



                    <button type="submit" className="savechanges">Save Changes</button>

                </form>
            </div>
        );
    
}