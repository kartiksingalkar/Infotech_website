import React from "react";
import { Outlet } from "react-router-dom";
import OffcanvasExample from "./Navbar";
import Footer from "./Footer";
import Popup_Form from "./Popup_Form";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CommonMail from "./CommonMail";
import "../styles/common-mail.css";

export default () => {
    return (
        <>
            <CommonMail />
            <OffcanvasExample />
            {/* <Popup_Form /> */}
            <Outlet />
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="colored"
                transition={Flip}
            />
        </>
    )
}