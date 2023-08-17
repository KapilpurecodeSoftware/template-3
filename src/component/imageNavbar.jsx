import React from "react";
import profile from "./profile.module.css";
import "./profile.css";
// import "./imageNavbar.css"
import { Projects } from "./projects";
import user from '../assets/user.png'

export default function ImageNavbar() {
  return (
    <>
      <div className={profile.profile_container}>
        <div className={profile.profile_sub_container}>
          <div className={profile.profile_hr}>
            <div>
              <h2>Profile</h2>
              <p>
                T-Wind / pages / <span style={{color:"lightblue"}}>Profile</span>
              </p>
            </div>
            <div>
              <button className={profile.profile_btn}>CREATE NEW</button>
            </div>
          </div>
          <div className={profile.profile_bg_container}>
            <div className={profile.profile_bg_color}></div>
            <div className={profile.profile_user}>
              <div className={profile.profile_img_box}>
                <img
                  className={profile.profile_img}
                  src={user}
                />
              </div>
              <h2>Rosa Dodson</h2>
              <p>UI/UX Designer, USA</p>
            </div>
          </div>
          <div className={profile.profile_bar}>
            <p>PROFILE</p>
            <p  style={{
                color: "rgb(130, 130, 224)",
                borderBottom: "2px solid rgb(130, 130, 224)",
              }}>PROJECTS</p>
            <p>POSTS</p>
            <p
              
            >
              SETTINGS
            </p>
          </div>
        </div>
        <div
          style={{ marginTop: "16px" }}
          className={profile.profile_sub_container}
        >
         <Projects/>
        </div>
      </div>
    </>
  );
}
