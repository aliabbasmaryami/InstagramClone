import React from "react";
import InstagramImage from "../assects/Instagram-logo.png";
import googleplayImage from "../assects/googlePlay.jpg";
import appImage from "../assects/app.png";
import fbImgae from "../assects/fb-img.png";
import "../App";

const login = () => {
  return (
    <div className="login-container">
      <div className="box-1">
        <div className="box-1-logo">
          <img
            src={InstagramImage}
            alt="# instagram logo"
            className="instagram-logo"
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="phone number username, email address"
          />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" />
        </div>
        <div className="login-button-box">
          <button className="login-button">login</button>
        </div>
        <div className="lines-box">
          <div className="lines1"></div>
          <div className="or-box">OR</div>
          <div className="lines2"></div>
        </div>
        <div className="fb-box">
          <span>
            <img src={fbImgae} alt="#" className="fb-logo" />
          </span>
          <p className="fb-links">Login with facebook</p>
        </div>
        <div className="forgotten-password">
        <p className="forgetton-password-link">forgot your password?</p>
      </div>
      </div>
      <div className="box2">
        <p className="account">
          Dont have an account? <span className="Sign-up">Sign up</span>
        </p>
        <div className="get-app-box">
        <p>Get the app.</p>
      </div>
      <div className="app-store-google-play-box">
        <img src={googleplayImage} alt="#" className="google-play-image" />
        <img src={appImage} alt="#" className="app-play-image" />
      </div>
    </div>
    </div>
  );
};

export default login;
