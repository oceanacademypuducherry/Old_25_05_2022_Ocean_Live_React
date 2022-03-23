import React from "react";
import Logo from "../../Image/login_logo.svg";
import OA from "../../Image/oa_logo.svg";
import { Link } from "react-router-dom";
import "./Style/LoggedInAppbarStyle.scss";
import { IoNotificationsOutline } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import { RiProfileLine } from "react-icons/ri";
import { FaShopify } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { GiBookshelf } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";

export function LoggedInAppbar() {
  let menuOnClick = () => {
    let doc = document;
    let closeMenu = doc.querySelector(".mobileSidebar-CloseBtn");
    let mobileSidebar = doc.querySelector(".mobileSidebar");
    let mobileSidebarRoutes = doc.querySelector(
      ".loggedInAppbar-Dropdown-Col-li"
    );
    console.log(mobileSidebarRoutes, "mobile");

    closeMenu.style.width = "50px";

    closeMenu.addEventListener("click", () => {
      mobileSidebar.style.width = "0px";
      closeMenu.style.width = "0px";
    });

    mobileSidebar.style.width = "250px";
  };

  return (
    <div className="loggedInAppbar">
      <div className="appbarLeft">
        <img src={Logo} alt="" />
      </div>
      <div className="appbarRight">
        <Link className="route" id="remove" to="mycourses">
          My Courses
        </Link>
        <Link className="route" id="remove" to="allcourses">
          All Courses
        </Link>

        <div id="mainNotification">
          <Link to="notification" className="notification-Logo">
            <IoNotificationsOutline className="notification-Icon" />
          </Link>
        </div>
        <div className="spreadCircle"></div>

        <div id="loggedInAppbar-Profile">
          <div className="loggedInAppbar-Profile-Circle">
            I
            <div className="loggedInAppbar-Dropdown">
              <div className="loggedInAppbar-Dropdown-Row">
                <div className="loggedInAppbar-Dropdown-Left-Circle">I</div>
                <div className="loggedInAppbar-Dropdown-Right">
                  <p>Ijass</p>
                  <p>jass07rtr@gmail.com</p>
                </div>
              </div>
              <div className="loggedInAppbar-Dropdown-Col">
                <Link
                  className="loggedInAppbar-Dropdown-Col-li"
                  to="/dashboard/mycourses"
                >
                  <FaBookReader className="loggedInAppbar-Dropdown-Col-li-icons" />
                  <div className="text-decoration">My Courses</div>
                </Link>
                <Link
                  className="loggedInAppbar-Dropdown-Col-li"
                  to="/dashboard/allcourses"
                >
                  <GiBookshelf className="loggedInAppbar-Dropdown-Col-li-icons" />
                  <div className="text-decoration">All Courses</div>
                </Link>

                <Link
                  className="loggedInAppbar-Dropdown-Col-li"
                  to="/dashboard/notification"
                >
                  <IoNotificationsOutline className="loggedInAppbar-Dropdown-Col-li-icons" />
                  <div className="text-decoration">Notification</div>
                </Link>

                <Link
                  className="loggedInAppbar-Dropdown-Col-li"
                  to="/dashboard/editprofile"
                >
                  <RiProfileLine className="loggedInAppbar-Dropdown-Col-li-icons" />
                  <div className="text-decoration">Edit Profile</div>
                </Link>
                <Link
                  className="loggedInAppbar-Dropdown-Col-li"
                  to="/dashboard/certificate"
                >
                  <GrCertificate className="loggedInAppbar-Dropdown-Col-li-icons" />
                  <div to="/dashboard/certificate" className="text-decoration">
                    Certificate
                  </div>
                </Link>

                <Link
                  className="loggedInAppbar-Dropdown-Col-li"
                  to="/dashboard/purchasehistory"
                >
                  <FaShopify className="loggedInAppbar-Dropdown-Col-li-icons" />
                  <div className="text-decoration">Purchase History</div>
                </Link>
                <Link
                  className="loggedInAppbar-Dropdown-Col-li"
                  to="/dashboard/notification"
                >
                  <HiOutlineLogout className="loggedInAppbar-Dropdown-Col-li-icons" />
                  <div className="text-decoration">Logout</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="loggedIn-Appbar-Menu">
        <TiThMenuOutline
          className="loggedIn-Appbar-Menu-icon"
          onClick={menuOnClick}
        />
      </div>
    </div>
  );
}