import React from "react";
import "./header.css";
// import USA from "../assets/usa.png";
import pureCodeImg from "../assets/pureCodeImg.png";

export default function Header() {
  return (
    <>
      <nav className="header">
        <div className="logo">
          <img src={pureCodeImg} alt="Logo" />
          <div className="dashboard">
            <span class="material-symbols-outlined textIcons">dashboard</span>
            Dashboard
            <span class="material-symbols-outlined downArrowHeader">
              expand_more
            </span>
          </div>
          <div className="dashboard">
            <span class="material-symbols-outlined textIcons">grid_view</span>
            APP
            <span class="material-symbols-outlined downArrowHeader">
              expand_more
            </span>
          </div>
          <div className="dashboard">
            <span class="material-symbols-outlined textIcons">image</span>
            UIKIT
            <span class="material-symbols-outlined downArrowHeader">
              expand_more
            </span>
          </div>
          <div className="dashboard">
            <span class="material-symbols-outlined textIcons">
              filter_center_focus
            </span>
            PAGES
            <span class="material-symbols-outlined downArrowHeader">
              expand_more
            </span>
          </div>
          <div className="dashboard">
            <span class="material-symbols-outlined textIcons">
              verified_user
            </span>
            AUTHENTICATON
            <span class="material-symbols-outlined downArrowHeader">
              expand_more
            </span>
          </div>
        </div>
        <div className="header-items">
          <input type="text" className="search-bar" placeholder="Search..." />
          <div className="icons  ">
            <div className="  ">
              <span class="material-symbols-outlined">brightness_6</span>
            </div>

            <span className="material-symbols-outlined">notifications</span>

            <div className="flagImg">
              <span class="material-symbols-outlined adminIcon">
                account_circle
              </span>
              <span className="" style={{ marginRight: "0px" }}>
                admin
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
