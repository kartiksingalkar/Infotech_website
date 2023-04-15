import React, { useEffect, useState } from "react";
import "../styles/common-mail.css";
import { AiOutlineMail } from "react-icons/ai";
import PopupMailForm from "./PopupMailForm";

function CommonMail() {
  const [sidebarWidth, setSidebarWidth] = useState(undefined);
  const [sidebarTop, setSidebarTop] = useState(undefined);

  useEffect(() => {
    const sidebarEl = document
      .getElementById("sidebar")
      .getBoundingClientRect();

    setSidebarWidth(sidebarEl.width);
    setSidebarTop(sidebarEl.top);
  }, []);

  useEffect(() => {
    if (!sidebarTop) return;

    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [sidebarTop]);

  const isSticky = (e) => {
    const sidebarEl = document.getElementById("sidebar");
    const scrollTop = window.scrollY;

    if (scrollTop >= sidebarTop - 10) {
      sidebarEl.classList.add("is-sticky");
    } else {
      sidebarEl.classList.remove("is-sticky");
    }
  };

  const onClickHandlerPopup = () => {
    document.getElementById("stickyMailPopUpID").style.display = "flex";
  };

  
  return (
    <>
      <div
        className="stickyMailButtonContainer siedebar"
        id="sidebar"
        style={{ width: sidebarWidth }}
        onClick={onClickHandlerPopup}
      >
        <AiOutlineMail className="mainIcon" />
      </div>

      <PopupMailForm />
    </>
  );
}

export default CommonMail;
