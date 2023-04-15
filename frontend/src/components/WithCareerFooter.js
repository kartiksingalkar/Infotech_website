import React from "react";
import { Outlet } from "react-router-dom";
import OffcanvasExample from "./Navbar";
import Footer from "./Footer";
import Popup_Form from "./Popup_Form";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CommonMail from "./CommonMail";
import "../styles/common-mail.css";
import CareerFooter from "./CareerFooter";

const WithCareerFooter = () => {
    return (
        <>
            <OffcanvasExample />
            <Outlet />
            <CareerFooter />
        </>
    )
}

export default WithCareerFooter