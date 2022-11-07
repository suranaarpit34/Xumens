import React from "react";
import "./Home.css";
import xumns from "../../Images/xumns.svg";
import twitterIcon from "../../Images/twitterIcon.svg"
const Home = () => {
  return (
    <>
      <section className="home-section">
        <div className="title">
          <img className="title-img" src={xumns} alt="xumns" />
        </div>
        <div className="desc">
          <p>Worlds first Web 3.0 media francise</p>
        </div>
        <div className="button-box">
            <button><img src={twitterIcon} alt="twitter" /> &nbsp;Join Us</button>
        </div>
      </section>
    </>
  );
};

export default Home;
