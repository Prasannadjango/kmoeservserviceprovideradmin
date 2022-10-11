import React, { useState } from "react";
import { Col, Row, Tab, Nav, Card, Button, Badge, Tabs, Modal, Form } from 'react-bootstrap';
import { MdDashboardCustomize, MdFormatListBulleted, MdOutlineTextSnippet, MdEdit, MdLogout, MdOutlineCancel, MdAddLocationAlt, MdCheckCircleOutline, MdAccessTime, MdCalendarToday, MdOutlineDescription, MdLocationOn, MdWatchLater } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import { FaHandshake } from "react-icons/fa";
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';
import person from '../Styles/orderperson.jpg';

function Admin() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="Dashboard_container">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>

                        <Col sm={2}>
                            <div className="d-flex position-relative justify-content-center my-5">
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/1.jpg"
                                    sx={{ width: 75, height: 75 }}
                                />
                                <Button className='Edit_btn' onClick={handleShow}>
                                    <MdEdit />
                                </Button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit Profile Details</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form.Control type="text" placeholder="Enter the Name.." className="py-3" />
                                        <Form.Control type="mail" placeholder="Enter the Mail-id.." className="py-3 mt-3" />
                                        <Form.Control type="Number" placeholder="Enter the Phone-Number.." className="py-3 mt-3" />
                                        <Form.Control type="text" placeholder="Enter the City.." className="py-3 mt-3" />
                                        <Form.Control type="Number" placeholder="Enter the Pin-code.." className="py-3 mt-3" />
                                        <Form.Control type="text" placeholder="Enter the Area.." className="py-3 mt-3" />
                                        <Form.Control as="textarea" placeholder="Enter the Address..." rows={3} className="mt-3" />
                                    </Modal.Body>
                                    <Modal.Footer>

                                        <Button variant="primary" className='w-100 py-3 fw-bold' onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
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
                               
                            </Nav>
                        </Col>

                        <Col sm={10} className='p-0 mt-2 bg-light'>
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
                                        className="Order_container mt-5 mb-5"
                                    >
                                        <Tab eventKey="Available" title="Available">

                                            <div className="my-5 ">
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
                                                                    <Button className="bg-danger border-0 w-xl 50 me-xl-3 me-0  mb-xl-0 mb-3 fs-5">
                                                                        <MdOutlineCancel className='fs-3 me-1' /> Reject
                                                                    </Button>
                                                                    <Button className='bg-success border-0 w-xl-50 fs-5'>
                                                                        <MdCheckCircleOutline className='fs-3 me-1' /> Accept
                                                                    </Button>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>

                                                    </Col>
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
                                                                    <Button className="bg-danger border-0 w-xl 50 w-100 me-xl-3 me-0  mb-xl-0 mb-3 fs-5">
                                                                        <MdOutlineCancel className='fs-3 me-1' /> Reject
                                                                    </Button>
                                                                    <Button className='bg-success border-0 w-xl-50  w-100 fs-5'>
                                                                        <MdCheckCircleOutline className='fs-3 me-1' /> Accept
                                                                    </Button>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>

                                                    </Col>
                                                </Row>
                                            </div>

                                            <div className='d-flex justify-content-center mb-5  mt-5'>
                                                <Pagination count={10} size="large" />
                                            </div>

                                        </Tab>
                                        <Tab eventKey="Processing" title="Processing">
                                            <div className="my-5 ">
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
                                                                    <Button className="bg-danger border-0 w-xl-50 me-xl-3 me-0 fs-5">
                                                                        <MdOutlineCancel className='fs-3 me-1' /> Reject
                                                                    </Button>
                                                                    <Button className='bg-success border-0 w-xl-50 fs-5 mt-xl-0 mt-3'>
                                                                        <MdCheckCircleOutline className='fs-3 me-1 ' /> Accept
                                                                    </Button>
                                                                </div>
                                                                <div className="Btns_container pt-3">
                                                                    <Button className="bg-primary border-0 w-xl-50 me-xl-3 me-0  fs-5">
                                                                        <MdAddLocationAlt className='fs-3 me-1' /> Track
                                                                    </Button>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>

                                                    </Col>
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
                                                                    <Button className="bg-danger border-0 w-xl-50 me-xl-3 me-0 fs-5">
                                                                        <MdOutlineCancel className='fs-3 me-1' /> Reject
                                                                    </Button>
                                                                    <Button className='bg-success border-0 w-xl-50 fs-5 mt-xl-0 mt-3'>
                                                                        <MdCheckCircleOutline className='fs-3 me-1 ' /> Accept
                                                                    </Button>
                                                                </div>
                                                                <div className="Btns_container pt-3">
                                                                    <Button className="bg-primary border-0 w-xl-50 me-xl-3 me-0  fs-5">
                                                                        <MdAddLocationAlt className='fs-3 me-1' /> Track
                                                                    </Button>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>

                                                    </Col>
                                                </Row>
                                            </div>

                                            <div className='d-flex justify-content-center mb-5  mt-5'>
                                                <Pagination count={10} size="large" />
                                            </div>

                                        </Tab>
                                        <Tab eventKey="Completed" title="Completed">
                                            <div className="my-5 ">
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
                                                                    <Button className="bg-danger border-0 w-xl-50 me-xl-3 me-0 fs-5">
                                                                        <MdOutlineCancel className='fs-3 me-1' /> Reject
                                                                    </Button>
                                                                    <Button className='bg-success border-0 w-xl-50 fs-5 mt-xl-0 mt-3'>
                                                                        <MdCheckCircleOutline className='fs-3 me-1 ' /> Accept
                                                                    </Button>
                                                                </div>
                                                                <div className="Btns_container pt-3">
                                                                    <Button className="bg-primary border-0 w-xl-50 me-xl-3 me-0  fs-5">
                                                                        <MdAddLocationAlt className='fs-3 me-1' /> Track
                                                                    </Button>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>

                                                    </Col>
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
                                                                    <Button className="bg-danger border-0 w-xl-50 me-xl-3 me-0 fs-5">
                                                                        <MdOutlineCancel className='fs-3 me-1' /> Reject
                                                                    </Button>
                                                                    <Button className='bg-success border-0 w-xl-50 fs-5 mt-xl-0 mt-3'>
                                                                        <MdCheckCircleOutline className='fs-3 me-1 ' /> Accept
                                                                    </Button>
                                                                </div>
                                                                <div className="Btns_container pt-3">
                                                                    <Button className="bg-primary border-0 w-xl-50 me-xl-3 me-0  fs-5">
                                                                        <MdAddLocationAlt className='fs-3 me-1' /> Track
                                                                    </Button>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>

                                                    </Col>
                                                </Row>
                                            </div>

                                            <div className='d-flex justify-content-center mb-5  mt-5'>
                                                <Pagination count={10} size="large" />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="Scheduled" title="Scheduled">
                                            <div className="my-5 ">
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
                                                                    <Button className="bg-danger border-0 w-xl-50 me-xl-3 me-0 fs-5">
                                                                        <MdOutlineCancel className='fs-3 me-1' /> Reject
                                                                    </Button>
                                                                    <Button className='bg-success border-0 w-xl-50 fs-5 mt-xl-0 mt-3'>
                                                                        <MdCheckCircleOutline className='fs-3 me-1 ' /> Accept
                                                                    </Button>
                                                                </div>
                                                                <div className="Btns_container pt-3">
                                                                    <Button className="bg-primary border-0 w-xl-50 me-xl-3 me-0  fs-5">
                                                                        <MdAddLocationAlt className='fs-3 me-1' /> Track
                                                                    </Button>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>

                                                    </Col>
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
                                                                    <Button className="bg-danger border-0 w-xl-50 me-xl-3 me-0 fs-5">
                                                                        <MdOutlineCancel className='fs-3 me-1' /> Reject
                                                                    </Button>
                                                                    <Button className='bg-success border-0 w-xl-50 fs-5 mt-xl-0 mt-3'>
                                                                        <MdCheckCircleOutline className='fs-3 me-1 ' /> Accept
                                                                    </Button>
                                                                </div>
                                                                <div className="Btns_container pt-3">
                                                                    <Button className="bg-primary border-0 w-xl-50 me-xl-3 me-0  fs-5">
                                                                        <MdAddLocationAlt className='fs-3 me-1' /> Track
                                                                    </Button>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>

                                                    </Col>
                                                </Row>
                                            </div>

                                            <div className='d-flex justify-content-center mb-5  mt-5'>
                                                <Pagination count={10} size="large" />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="Cancelled" title="Cancelled">
                                            <div className="my-5 ">
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

                                                            </Card.Body>
                                                        </Card>

                                                    </Col>
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

                                                            </Card.Body>
                                                        </Card>

                                                    </Col>
                                                </Row>
                                            </div>

                                            <div className='d-flex justify-content-center mb-5  mt-5'>
                                                <Pagination count={10} size="large" />
                                            </div>
                                        </Tab>

                                    </Tabs>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Fourth">
                                    <div className="mt-5 Plancards_container">
                                        <Row xl={2} xs={1}>
                                            <Col>
                                                <Card className="Plancard pt-3 position-relative">

                                                    <h1 className="text-center display-4">Gold</h1>
                                                    <div className="Plancard_head bg-primary  ">
                                                        <h3 className='text-white m-0'>$10</h3>
                                                    </div>

                                                    <Card.Body>
                                                        <ol className="fs-5 text-black-50">
                                                            <li>10 Service per day</li>
                                                            <li>Addon Services available</li>
                                                            <li> Validity till plan get expired</li>
                                                        </ol>
                                                        <Button className='w-100 py-2 fs-5 mt-2 border border-2 border-primary text-primary bg-white fw-bold'>
                                                            Subsricbed
                                                        </Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col>
                                                <Card className="Plancard pt-3 position-relative">

                                                    <h1 className="text-center display-4">Platinum</h1>
                                                    <div className="Plancard_head bg-primary  ">
                                                        <h3 className='text-white m-0'>$20</h3>
                                                    </div>

                                                    <Card.Body>
                                                        <ol className="fs-5 text-black-50">
                                                            <li>10 Service per day</li>
                                                            <li>Addon Services available</li>
                                                            <li> Validity till plan get expired</li>
                                                        </ol>
                                                        <Button className='w-100 py-2 fs-5 mt-2 '>
                                                            Choose Plan
                                                        </Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col className='mt-4'>
                                                <Card className="Plancard pt-3 position-relative">

                                                    <h1 className="text-center display-4">Silver</h1>
                                                    <div className="Plancard_head bg-primary  ">
                                                        <h3 className='text-white m-0'>$5</h3>
                                                    </div>

                                                    <Card.Body>
                                                        <ol className="fs-5 text-black-50">
                                                            <li>10 Service per day</li>
                                                            <li>Addon Services available</li>
                                                            <li> Validity till plan get expired</li>
                                                        </ol>
                                                        <Button className='w-100 py-2 fs-5 mt-2 '>
                                                            Choose Plan
                                                        </Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col className='mt-4'>
                                                <Card className="Plancard pt-3 position-relative">

                                                    <h1 className="text-center display-4">Diamond</h1>
                                                    <div className="Plancard_head bg-primary  ">
                                                        <h3 className='text-white m-0'>$55</h3>
                                                    </div>

                                                    <Card.Body>
                                                        <ol className="fs-5 text-black-50">
                                                            <li>10 Service per day</li>
                                                            <li>Addon Services available</li>
                                                            <li> Validity till plan get expired</li>
                                                        </ol>
                                                        <Button className='w-100 py-2 fs-5 mt-2 '>
                                                            Choose Plan
                                                        </Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>



                                        </Row>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    );
}

export default Admin;