import React, { Component } from "react";
import Navbar from "./navbar";
import './css/editHall.css';
import { IoIosArrowBack } from 'react-icons/io';

export default function editHall() {
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

                    <button type="submit" className="savechanges">Save Change</button>

                </form>
            </>
        );
    
}