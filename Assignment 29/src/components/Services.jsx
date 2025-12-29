import React from "react";
import Badge from "./Badge";
import Button from "./Button";
import "./services.css";
import GlassButton from "./GlassButton";
import {
  RiArrowRightLongLine,
  RiArrowLeftLongLine,
  RiArrowRightUpLongLine,
} from "@remixicon/react";

const Services = () => {
  return (
    <section id="services">
      <div className="service-left">
        <div>
          <Badge content="Services" />
          <p>
            Explore our full range of coaching, training, and tennis
            experiences. From first serve to match point — we've got the right
            program for you.
          </p>
        </div>
        <Button content="Explore More" showIcon={true} />
      </div>
      <div className="service-mid">
        <div className="top">
          <GlassButton content="Training Program" fontsize="1rem" />
        </div>
        <div className="bottom">
          <p>Programs designed for all ages and abilities.</p>
          <RiArrowRightUpLongLine />
        </div>
      </div>
      <div className="service-right">
        <div className="top">
          <GlassButton content="Court Access" fontsize="1rem" />
          <p>Hourly Court Rental</p>
        </div>
        <div className="bottom">
          <p>
            Step into a space built for players to grow, compete, and thrive.
          </p>
          <div>
            <div className="left">
              <RiArrowLeftLongLine size={18} />
            </div>
            <div className="right">
              <RiArrowRightLongLine size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

/**
 * 
 * 


Explore More

Training Programs


Court Access

Hourly Court Rental


 */
