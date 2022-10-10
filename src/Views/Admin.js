import React from "react";
import { Col, Row, Tab, Nav, Card, Button, Badge, Tabs, Container } from 'react-bootstrap';
import { MdDashboardCustomize, MdFormatListBulleted, MdOutlineTextSnippet, MdLogout, MdAccessTime, MdCalendarToday, MdOutlineDescription, MdLocationOn, MdWatchLater } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import { FaHandshake, FaSdCard } from "react-icons/fa";
import Avatar from '@mui/material/Avatar';
import person from '../Styles/orderperson.jpg';
import { ButtonBase } from "@mui/material";
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
                            <Tab.Pane eventKey="Third">
                                <Tabs
                                    defaultActiveKey="Available"
                                    transition={false}
                                    id="noanim-tab-example"
                                    className="Order_container mt-5"
                                >
                                    <Tab eventKey="Available" title="Available">

                                        <div className="mt-5">
                                            <Row className='justify-content-center'>
                                                <Col xl={4}>
                                                    <Card className='Order_Card px-3 py-4'>
                                                        <div className="d-flex">
                                                            <div className='Ordercard_img'>
                                                                <img src={person} className='w-100 h-100' />
                                                            </div>
                                                            <div className="Ordercard_heading">
                                                                <h2 className='fw-bold'>Kanmani</h2>
                                                                <h6 className="text-secondary">Service-ID:#654321</h6>
                                                            </div>

                                                        </div>
                                                        <div>
                                                            <span className="servicetype">Painting</span>
                                                        </div>
                                                        <Card.Body className=' p-0'>
                                                            <div className='mt-4'>
                                                                <div className="d-flex mw align-items-center">
                                                                    <MdLocationOn className="fs-2 text-primary" />
                                                                    <p className="text-black-50 fs-6 ps-2 m-0">Anna Nagar</p>
                                                                </div>
                                                                <div className="d-flex mw pt-3 align-items-center">
                                                                    <MdCalendarToday className="fs-2 text-primary" />
                                                                    <p className="text-black-50 fs-6 ps-2 m-0"> 06-03-2022</p>
                                                                </div>
                                                                <div className="d-flex mw pt-3 align-items-center">
                                                                    <MdAccessTime className="fs-2 text-primary" />
                                                                    <p className="text-black-50 fs-6 ps-2 m-0">6:00pm</p>
                                                                </div>

                                                            </div>
                                                            <div className="Btns_container pt-4">
                                                                <Button className="bg-danger border-0 w-50 me-3  fs-5">
                                                                    Reject
                                                                </Button>
                                                                <Button className='bg-success border-0 w-50 fs-5'>
                                                                    Accept
                                                                </Button>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>

                                                </Col>
                                            </Row>
                                        </div>

                                    </Tab>
                                    <Tab eventKey="Processing" title="Processing">

                                    </Tab>
                                    <Tab eventKey="Completed" title="Completed">

                                    </Tab>
                                    <Tab eventKey="Scheduled" title="Scheduled">

                                    </Tab>
                                    <Tab eventKey="Cancelled" title="Cancelled">

                                    </Tab>

                                </Tabs>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
}

export default Admin;