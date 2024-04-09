import { useState } from "react";
import "./App.css";
import plus from "./assets/icon.svg";
import SideBar from "./Components/SideBar.jsx";
import Card from "./Components/Card.jsx";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Message from "./assets/Message circle.svg";
import Bell from "./assets/Bell.svg";
import Settings from "./assets/Settings_blue.svg";
import profile from "./assets/Ellipse 49.svg";
import Data from "../src/ThreeCard.json";
import BigCard from "./Components/BigCard.jsx";
import arrow from "./assets/Arrow.svg";
import path1 from "./assets/path1.svg";
import path2 from "./assets/path2.svg";
import path3 from "./assets/path3.svg";
import path4 from "./assets/path4.svg";
import path5 from "./assets/path5.svg";
import path6 from "./assets/path6.svg";
import TableData from "../src/TableData.json";
import Row from "./Components/Row.jsx";
import card2 from "./assets/card2.svg";
function App() {
  return (
    <div className="main-container">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="analyatic-side">
        <div className="navbar-container">
          <div className="navbar-search-container">
            <FormControl sx={{ m: 2, width: "60ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Search
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                // type={'password'}
                startAdornment={<span>&#x1F56C;</span>}
                endAdornment={<span>&#8855;</span>}
                defaultValue={"Search by profile, setting, artifact etc..."}
                label="Search"
              />
                
            </FormControl>
          </div>
          <div className="navbar-button-container">
            <button className="navbar-button">
              <img src={Bell} />
            </button>
            <button className="navbar-button">
              <img src={Message} />
            </button>
            <button className="navbar-button">
              <img src={Settings} />
            </button>
            <div className="navbar-button">
              <img src={profile} alt="profile" className="profile-photo " />
            </div>
          </div>
        </div>
        <div className="four-round-buttons">
          <button className="main-button selected">
            {" "}
            <img src={plus} alt="plus" /> Create Report{" "}
          </button>
          <button className="main-button">Share this Background </button>
          <button className="main-button">Select Duration </button>
          <button className="main-button">Compare with Duration </button>
        </div>
        <div className="four-cards">
          <div className="data-card card1">
            <span className="data-card-title">EFFICIENCY</span>
            <span className="lorum-ipsum"> Lorum Ipsum</span>
            <span className="data-card-number"> 1.1921</span>
            <span className="data-card-percentage"> +0.0015% (+0.13%) </span>
            <span className="data-card-curr"> 0.00 USD</span>
          </div>
          <div className="data-card card2">
            <span className="data-card-title">TIME TO MARKET</span>
            <span className="lorum-ipsum"> Lorum Ipsum</span>
            <span className="data-card-number">327,176</span>
            <span className="data-card-percentage"> -97,914.00 (-23.03%)</span>
            <span className="data-card-curr"> 131,040,723,108 JPY</span>
          </div>
          <div className="data-card card3">
            <span className="data-card-title">TECH DEBT</span>
            <span className="lorum-ipsum"> Lorum Ipsum</span>
            <span className="data-card-number"> 1.1763</span>
            <span className="data-card-percentage"> +0.0015% (+0.13%)</span>
            <span className="data-card-curr"> 0.00 USD</span>
          </div>
          <div className="data-card card4">
            <span className="data-card-title">PREDICTABILITY</span>
            <span className="lorum-ipsum"> Lorum Ipsum</span>
            <span className="data-card-number"> 0.00313010</span>
            <span className="data-card-percentage"> -0.00050430 (-13.88%)</span>
            <span className="data-card-curr"> 1,566 BTC</span>
          </div>
        </div>
        <div className="three-data-cards">
          {Data.map((data) => (
            <BigCard data={data} />
          ))}
        </div>
        <div className="footer">
          <div className="upper">
            <div className="pageview">
              <span>PAGEVIEWS</span>
              <img src={arrow} alt="plus" />
            </div>
            <div className="time-selection">
              <div class="grid-container">
                <span class="grid-item">Today</span>
                <span class="grid-item">Yesterday</span>
                <span class="grid-item">Week</span>
                <span class="grid-item">Month</span>
                <span class="grid-item">Quater</span>
                <span class="grid-item">Year</span>
                </div>
            </div>
          </div>
          <div className="table">
            <div className="table-title">
              <div className="table-title-container">Page</div>
              <div className="table-title-container">
                <span className="class1">Pageviews</span>
                <span className="class2">356,928</span>
                <span className="class3"><img src={path1}></img></span>
              </div>
              <div className="table-title-container">
                <span className="class1">Unique PageViews</span>
                <span className="class2">275,588</span>
                <span className="class3"><img src={path2}></img></span>
              </div>
              <div className="table-title-container">
                <span className="class1">Avg. time on page</span>
                <span className="class2">00:03:51</span>
                <span className="class3"><img src={path3}></img></span>
              </div>
              <div className="table-title-container">
                <span className="class1">Extrances</span>
                <span className="class2">315,643</span>
                <span className="class3"><img src={path4}></img></span>
              </div>
              <div className="table-title-container">
                <span className="class1">% Exit</span>
                <span className="class2">39,84%</span>
                <span className="class3"><img src={path5}></img></span>
              </div>
              <div className="table-title-container">
                <span className="class1">Page value</span>
                <span className="class2">275,588</span>
                <span className="class3"><img src={path6}></img></span>
              </div>
            </div>
           {TableData.map((data) => (
            <Row data={data} />
           ))}
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default App;
