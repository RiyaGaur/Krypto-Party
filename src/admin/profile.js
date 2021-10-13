import React from 'react';
// import { useScreenClass } from 'react-grid-system';
import { Row, Col } from 'react-grid-system';
import Navbar from '../Navbar/Navbar';
import './css/profile.css';
// import img from './profileimg.jpg';
import { BiEdit } from "react-icons/bi";

export default function profile() {
    // const screenClass = useScreenClass();
    return (
        <>
            <Navbar />
            <Row>
                <Col sm={8} className='details'>
                    <div className='content'>
                        <Row>
                            <Col sm={6}>
                                <Row>
                                    <Col sm={4}><p className='label'>Name </p></Col>
                                    <Col sm={7}><p>: Seller 1 </p></Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><p className='label'>Email </p></Col>
                                    <Col sm={7}><p>: seller01@iamneo.ai </p></Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><p className='label'>Mobile No. </p></Col>
                                    <Col sm={7}><p>: 9999999999</p></Col>
                                </Row>
                                <Row>
                                    <Col sm={4}><p className='label'>Password</p></Col>
                                    <Col sm={7}><p>: ****** </p></Col>
                                </Row>
                            </Col>
                            <Col sm={6}>
                                <Row>
                                    <Col sm={5}><p className='label'>Company Name </p></Col>
                                    <Col sm={7}><p>: IamNeo</p></Col>
                                </Row>
                                <Row>
                                    <Col sm={5}><p className='label'>Company Address</p></Col>
                                    <Col sm={7}><p>: 1/7A, Area, Locality, District, Pincode </p></Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col sm={3} className='profilephoto'>
                    <div className="imgdiv">
                        <img className="img" src={img} width="180" height="180" />
                    </div>
                    <button type="submit" className="submit"><BiEdit /> Edit Profile</button>
                </Col>
            </Row>
        </>
    );
}
