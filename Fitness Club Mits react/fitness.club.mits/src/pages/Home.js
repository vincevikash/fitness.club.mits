import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Get In✨|Get Fit🏋️| Get Active🚶</h1>
          {/* <p>Best Food In India</p> */}
          <Link to="/team">
            <button>Meet Our Team</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
