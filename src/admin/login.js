import React from "react";
import "./css/login.css";

export default function login(){
    return (
        <form id="signin">
            <p className="title">LOGIN</p>

            <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter Username" />
            </div>

            <div className="form-group">
                <input type="password" className="form-control" placeholder="Enter Password" />
            </div>

            <button type="submit" className="submit">Submit</button>
            <div className="loginlink">
                <p >
                    New to Booking? <a href="#">Click Here</a>
                </p>
            </div>
        </form>
    );
}