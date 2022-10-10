import React from "react";
import { Col, Row, Tab, Nav, Card, Button,Badge } from 'react-bootstrap';
import { MdDashboardCustomize, MdFormatListBulleted, MdOutlineTextSnippet, MdLogout, MdOutlineDescription, MdWatchLater } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import { FaHandshake } from "react-icons/fa";
import Avatar from '@mui/material/Avatar';
function Admin() {

    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>

                    <Col sm={2}>
                        <div className="d-flex justify-content-center my-5">
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 70, height: 70 }}
                            />
                        </div>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first" className=" border rounded-0 border-0 py-3">
                                    <div className="d-flex align-items-center">
                                        <MdDashboardCustomize className="fs-3 me-2" />
                                        <p className="m-0 fs-5">Dashboard</p>

                                    </div>
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="Third" className="border rounded-0 border-0 py-3">
                                    <div className="d-flex align-items-center">
                                        < MdFormatListBulleted className="fs-3 me-2" />
                                        <p className="m-0 fs-5">Order-Status</p>

                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Fourth" className=" border rounded-0 border-0 py-3">
                                    <div className="d-flex align-items-center">
                                        <MdOutlineTextSnippet className="fs-3 me-2" />
                                        <p className="m-0 fs-5">Service-Plan</p>

                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Fifth" className="border rounded-0 border-0 py-3">
                                    <div className="d-flex align-items-center">
                                        <MdLogout className="fs-3 me-2" />
                                        <p className="m-0 fs-5">Log-out</p>

                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    <Col sm={10} className='p-0 mt-4 bg-light'>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div className="Dashboard_container container py-3">
                                    <h1 className="py-4">Welcome Rambo !</h1>
                                    <Row xl={4} md={2} xs={1}>
                                        <Col>
                                            <Card className="Dashboard_card py-3 px-2">
                                                <div className="d-flex card_head">
                                                    <div>
                                                        <MdOutlineDescription className="fs-3 text-white" />
                                                    </div>
                                                    <h3 className="ps-3">Bookings</h3>
                                                </div>
                                                <div className="d-flex justify-content-center pt-3">
                                                    <div className="pe-5">
                                                        <p className="fs-6 text-black-50 m-0">Completed</p>
                                                        <p className="fs-5  m-0"> 12 </p>
                                                    </div>
                                                    <div>
                                                        <p className="fs-6 text-black-50 m-0">Cancelled</p>
                                                        <p className="fs-5 m-0"> 5 </p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="Dashboard_card1 py-3 px-2">
                                                <div className="d-flex card_head1">
                                                    <div>
                                                        <VscServerProcess className="fs-3 text-white" />
                                                    </div>
                                                    <h3 className="ps-3">Processing</h3>
                                                </div>
                                                <div className="d-flex justify-content-center pt-3">
                                                    <div className="pe-5">
                                                        <p className="fs-6 text-black-50 m-0">Completed</p>
                                                        <p className="fs-5  m-0"> 12 </p>
                                                    </div>
                                                    <div>
                                                        <p className="fs-6 text-black-50 m-0">Cancelled</p>
                                                        <p className="fs-5 m-0"> 5 </p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="Dashboard_card2 py-3 px-2">
                                                <div className="d-flex card_head2">
                                                    <div>
                                                        <MdWatchLater className="fs-3 text-white" />
                                                    </div>
                                                    <h3 className="ps-3">Scheduled</h3>
                                                </div>
                                                <div className="d-flex justify-content-center pt-3">
                                                    <div className="pe-5">
                                                        <p className="fs-6 text-black-50 m-0">Completed</p>
                                                        <p className="fs-5  m-0"> 12 </p>
                                                    </div>
                                                    <div>
                                                        <p className="fs-6 text-black-50 m-0">Cancelled</p>
                                                        <p className="fs-5 m-0"> 5 </p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="Dashboard_card3 py-3 px-2">
                                                <div className="d-flex card_head3">
                                                    <div>
                                                        <FaHandshake className="fs-3 text-white" />
                                                    </div>
                                                    <h3 className="ps-3">Completed</h3>
                                                </div>
                                                <div className="d-flex justify-content-center pt-3">
                                                    <div className="pe-5">
                                                        <p className="fs-6 text-black-50 m-0">Completed</p>
                                                        <p className="fs-5  m-0"> 12 </p>
                                                    </div>
                                                    <div>
                                                        <p className="fs-6 text-black-50 m-0">Cancelled</p>
                                                        <p className="fs-5 m-0"> 5 </p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <div className="PlanDetails_container pt-5">

                                        <Col xl={4} xs={12}>
                                            <Card className="Plancard pt-3 position-relative">
                                                <Badge pill bg="success" className='Plan_badge'>
                                                    Active Plan
                                                </Badge>
                                                <h1 className="text-center display-4">Gold</h1>
                                                <div className="Plancard_head bg-primary  ">
                                                    <h3 className='text-white m-0'>$10</h3>
                                                </div>
                                                <div className='d-flex Payment_text'>
                                                    <p>Last-Payment:</p>
                                                    <p className="text-secondary">12/2/21</p>
                                                </div>
                                                <Card.Body>
                                                    <p className='text-secondary text-center'>
                                                        Due date : 12/2/22
                                                    </p>
                                                    <Button className='w-100 py-2 fs-5 mt-2'>
                                                        Change Plan
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
}

export default Admin;