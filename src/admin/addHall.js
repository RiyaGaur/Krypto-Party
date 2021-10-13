import React from "react";
import "./css/addHall.css";
import Navbar from "./navbar";
import { IoIosArrowBack } from 'react-icons/io';

export default function addHall() {
        return (
            <>
                <Navbar />
                <form id="signin">
                    <button type="submit" className="back">
                        <IoIosArrowBack /> Back
                    </button>
                    <br />
                    <label>Event Date</label>
                    <div className="form-group">
                        <input type="date" className="form-control" placeholder="" />
                    </div>

                    <label>Hall Price</label>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="" />
                    </div>

                    <label>Hall Type</label>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="" />
                    </div>

                    <button type="submit" className="adddate">Add Date</button>

                </form>
            </>
        );
    
}