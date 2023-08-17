import React from "react";
import "./profilepage.css";

export default function ProfilePage() {
  return (
    <>
      <div class="navbar">
        <div class="navbar-left">
          <div class="navbar-brand">Profile</div>
          <div class="navbar-subtext">
            Twind /<div>Pages / </div>
            <div className="profile">Profile </div>
          </div>
        </div>
        <div class="navbar-right">
          <button class="navbar-button">Create New</button>
        </div>
      </div>
    </>
  );
}
