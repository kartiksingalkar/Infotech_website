import React from "react";
import Popup_Form from "./Popup_Form";
import { Outlet } from "react-router-dom";

export default () => {
    return (
        <>
            {/* <Popup_Form /> */}
            <Outlet />
        </>
    )
}