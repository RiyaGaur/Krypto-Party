import React from "react";
import "./css/signup.css";
export default function signup() {
        return (
            <div className="main">
                <form id="signup">
                    <p className="title">SIGN UP</p>


                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Enter Email" />
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Enter Password" />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Mobile Number" />
                    </div>

                    <div className="form-group">
                        <select>
                            <option value="Admin">Admin</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </div>
                    {/* <div className="form-group">
                    <input type="" className="form-control" placeholder="Admin" />
                </div> */}

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Seller Name" />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Company Name" />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Company Image Url" />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Company Adress" />
                    </div>

                    <button type="submit" className="submit">Submit</button>
                    <div className="loginlink">
                        <p >
                            Go to Login <a href="#">Click Here</a>
                        </p>
                    </div>
                </form>
            </div>
        );
    
}