import React from "react";
import logo from '../Styles/kslogo.png';
import { Button } from 'react-bootstrap';
import { IoMdNotificationsOutline } from "react-icons/io";
function Header() {
    return (
        <>
            <div className="Header_container d-flex justify-content-between ">
                <div>
                    <img src={logo} />
                </div>
                <div>
                    <Button className='bg-transparent text-dark fs-3 border-0'>
                          <IoMdNotificationsOutline/>
                    </Button>
                </div>
            </div>
        </>
    );
}
export default Header;