import React from "react";
import "./hero.css";
import Button from "./Button";
import { RiArrowRightUpLongLine } from "@remixicon/react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="top">
          <h1>
            Unleash your inner champion today. <br /> All in One Place.
          </h1>
          <p>
            Join the ultimate tennis experience — where passion meets
            performance, <br /> and every swing brings you closer to victory
          </p>
          <Button content="Start your own journey" />
        </div>
        <div className="bottom">
          <div className="professionals">
            <p>
              Train with real professionals. <br /> Get the real results
            </p>
            <div className="professional-imgs">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1649541608577-d165ce8de13e?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="socials">
            <div>
              Instagram <RiArrowRightUpLongLine size={15} />
            </div>
            <div>
              Facebook <RiArrowRightUpLongLine size={15} />
            </div>
            <div>
              Tik Tok <RiArrowRightUpLongLine size={15} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
