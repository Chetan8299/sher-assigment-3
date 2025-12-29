import React from "react";
import "./about.css";
import Badge from "./Badge";
import GlassButton from "./GlassButton";

const About = () => {
  return (
    <section id="about">
      <div className="top-left">
        <Badge content="About Horizon" />
      </div>
      <div className="top-right">
        <p>
          {" "}
          At Horizon, we don't just play tennis - we live it. Since 2021, our
          club has been a home for players of all levels, from eager beginners
          to seasoned pros.
        </p>
      </div>
      <div className="midup">
        <div className="mid-left">
          <img
            src="https://thumbs.dreamstime.com/b/tennis-court-icon-vector-tennis-illustration-sign-sport-symbol-logo-tennis-court-icon-vector-tennis-illustration-sign-sport-345662786.jpg"
            alt=""
          />
          <p>
            Professional hard courts{" "}
            <span>
              with tournament-grade lighting & climate control— play in
            </span>{" "}
            perfect conditions, in any season.
          </p>
          <div>
            <div className="toggle"></div>
            <div>Game Mode</div>
          </div>
        </div>
        <div className="mid-mid">
          <GlassButton content="Private & Group Lessons" />
        </div>
        <div className="mid-right">
          <div className="text">
            <h1>100+</h1>
            <h2>Pro Coaches</h2>
            <p>
              Certified professionals ready to boost your game from first serve
              to tournament level.
            </p>
          </div>
          <div className="metrics">
            <div className="stats">
              <div>Beginner</div>
              <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
              <span>55</span>
            </div>
            <div className="stats">
              <div>Intermediate</div>
              <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
              <span>55</span>
            </div>
            <div className="stats">
              <div>Advanced</div>
              <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
              <span>55</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mid-head">A few more facts about us in numbers</div>
      <div className="bottom">
        <div className="nums">
          <div className="num">12 000+</div>
          <h2>Hours of play annually</h2>
        </div>
        <div className="nums">
          <div className="num">89%</div>
          <h2>Player Retention Rate</h2>
        </div>
        <div className="nums">
          <div className="num">1,200+</div>
          <h2>Active Members</h2>
        </div>
        <div className="nums">
          <div className="num">125+</div>
          <h2>Annual Tournaments</h2>
        </div>
      </div>
    </section>
  );
};

export default About;

/* 




Intermediate

Advanced



55

40

35

*/
