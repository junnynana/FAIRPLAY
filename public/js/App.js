import React from 'react';
import logo from './logo.svg';
import {Route, Link, Router} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import './deco.css'


function App(props) {
  return (
    
    <div className="entire">
      
      <div className="head"> 
        <span className="top-icon">
          <span className="badminton"> <img src="badminton.png" width="7%" ></img></span>
          <span className="menu">
            <button type="button" >
            <image src="menu.png">menu</image>
          </button></span>
        </span>
        <h1 className="title">
          <span className="color">Fair<br/>play;</span>
        </h1>
      </div>

      <div className="body">
        <h2 class="login">Hello,<b>Name!</b></h2>
        <img src="user.png" class="login1" height="150px" width="120px"></img>
      </div>  
        <hr/>

      <div className="body1">
        <span className="Button">
          <button type="button" class="button" ><img src="ranking.png" width="100px" height="100px" ></img></button>
          <button type="button" class="button"><img src="myinfo.png" width="100px" height="100px"></img></button>
          <button type="button" class="button"><img src="talk.png" width="100px" height="100px"></img></button>
        </span>
        <br></br>
      </div>  



        <span className ="text">
          <span id="R">Ranking</span>
          <span id="M"> My Info</span>
          <span id="T">Talk</span>      
        </span>


      <div className="today-ranking">
        <p className="ranking-title">Today's Ranking</p>
        <span className="rank">
          <img src="first.png" width="5%"></img>
          <img src="country.png" width="5%"></img>
          <span className="name">name</span>
          <span className="score">score</span>
          <span className="extra">()</span>
        <br></br>
        </span>
        <span className="rank">
          <img src="second.png" width="5%"></img>
          <img src="country.png" width="5%"></img>
          <span className="name">name</span>
          <span className="score">score</span>
          <span className="extra">()</span>
        </span>
        <br></br>
        <span className="rank">
          <img src="third.png" width="5%"></img>
          <img src="country.png" width="5%"></img>
          <span className="name">name</span>
          <span className="score">score</span>
          <span className="extra">()</span>
        </span>
      </div>

      <div className="bottom-menu">
        <div className="component">Menu1</div>
        <div className="component">Menu2</div>
        <div className="component">Menu3</div>
        <div className="component">Menu4</div>
        <div className="component">Menu5</div>
      </div>

    </div>
  );
}

export default App;