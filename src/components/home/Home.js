import React from "react";
import "antd/dist/antd.css";
import "./home.css";
// import { Carousel } from "antd";
import Navbar from "../Navbar";

const Home = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="page-first">
        <div className="card-first">
          <div className="container">
            <div className="content">
              <div className="text">
                <h1>
                  Let's discover <br />
                  the digital <br />
                  world.
                </h1>
                <h2>
                  I will give digital wing's to your business. <br />
                  What you want ?.
                </h2>
              </div>
            </div>
          </div>
          <div class="second-container"></div>
        </div>
      </div>
      <div className="page-second">
        <div className="card-second">
          <div className="container">
            <div className="btn-container">
              <div className="btn btn--shockwave is-active"><p>HTML</p></div>
              <div className="btn btn--shockwave is-active"><p>CSS</p></div>
              <div className="btn btn--shockwave is-active"><p>JAVASCRIPT</p></div>
              <div className="btn btn--shockwave is-active"><p>REACT JS</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
