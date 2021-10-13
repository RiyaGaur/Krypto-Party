import React from 'react';
import { useScreenClass } from 'react-grid-system';
import { Row, Col } from 'react-grid-system';
// import Navbar from '../Navbar/Navbar';
import './css/dashboard.css';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from 'react-icons/ai';

export default function dashboard() {
    // const screenClass = useScreenClass();
    return (
        <>
            {/* <Navbar /> */}

            <Row>
                <Col sm={8} className='details'>
                    <h1>Company Name</h1>
                    <div className='booked'>Booked</div>
                    <div className='content'>
                        <Row>
                            <Col sm={4}>
                                <p>Event Date: Date</p>
                                <p>Hall Price: $1000 | per Day</p>
                            </Col>
                            <Col sm={4}>
                                <p className='halltype'>Hall Type: Day</p>
                            </Col>
                            <Col sm={4}>
                                <p className='buttons'>
                                    <button type="submit" className="edit"><BiEdit /></button>
                                    <button type="submit" className="delete"><AiFillDelete /></button>
                                </p>
                            </Col>
                        </Row>
                    </div>


                    <div className='available'>Available</div>
                    <div className='content'>
                        <Row>
                            <Col sm={4}>
                                <p>Event Date: Date</p>
                                <p>Hall Price: $1000 | per Day</p>
                            </Col>
                            <Col sm={4}>
                                <p className='halltype'>Hall Type: Day</p>
                            </Col>
                            <Col sm={4}>
                                <p className='buttons'>
                                    <button type="submit" className="edit"><BiEdit /></button>
                                    <button type="submit" className="delete"><AiFillDelete /></button>
                                </p>
                            </Col>
                        </Row>
                    </div>


                    <div className='booked'>Booked</div>
                    <div className='content'>
                        <Row>
                            <Col sm={4}>
                                <p>Event Date: Date</p>
                                <p>Hall Price: $1000 | per Day</p>
                            </Col>
                            <Col sm={4}>
                                <p className='halltype'>Hall Type: Day</p>
                            </Col>
                            <Col sm={4}>
                                <p className='buttons'>
                                    <button type="submit" className="edit"><BiEdit /></button>
                                    <button type="submit" className="delete"><AiFillDelete /></button>
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col sm={3} >
                    <div className='earning'>
                        <h3>Earnings</h3>
                        <p>Total Today</p>
                        <p>$600</p>
                        <hr style={{
                            color: '#000000',
                            backgroundColor: '#000000',
                            width: '50%',
                        }} />
                        <p>Monthly</p>
                        <p>$700</p>
                    </div>
                    <div className='addnew'>
                        <p>Want to add a New Day</p>
                        <button type="submit" className="submit">Add New</button>
                    </div>
                </Col>
            </Row>
        </>
    );
}
