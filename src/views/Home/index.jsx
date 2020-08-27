import React from "react";
import "./home.scss";
import Button from "../../components/RegisterButton";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export default function Home() {
  return (
    <div className="home-view-container">
      <div className="top-bar-container">
        <Logo />
      </div>
      <div className="main-container">
        <div className="mockups"></div>
        <div className="container">
          <div className="header">Build The Community Your Fans Will Love</div>
          <div className="description">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </div>
          <Button text="Register" />
        </div>
      </div>
      <div className="footer">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
      </div>
    </div>
  );
}

{
  /* <footer>
  <p class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
      Frontend Mentor
    </a>
    . Coded by <a href="#">David Kostuchenko</a>.
  </p>
</footer>; */
}
