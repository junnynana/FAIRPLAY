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
      
      <div className="top-part"> 
        <span className="top-part_icon">
          <span className="top-part_icon_bad"> <img src="badminton.png" width="7%" ></img></span>
          <span className="top-part_icon_menu">
            <button type="button" >
            <image src="menu.png">menu</image>
          </button></span>
        </span>
        <h1 className="top-item_name">
          <span className="top-item_deco">Fair<br/>play;</span>
        </h1>
      </div>

      <div className="middle-part">
        <h2 class="middle-part_user">Hello,<b>Name!</b></h2>
        <img src="user.png" class="middle-part_profile" height="150px" width="120px"></img>
      </div>  
        <hr/>

      <div className="middle-part_contents">
        <span className="Button">
          <button type="button" class="middle-contents_bt" ><img src="ranking.png" width="100px" height="100px" ></img></button>
          <button type="button" class="middle-contents_bt"><img src="myinfo.png" width="100px" height="100px"></img></button>
          <button type="button" class="middle-contents_bt"><img src="talk.png" width="100px" height="100px"></img></button>
        </span>
        <br></br>
      </div>  



        <span className ="middle-contents_info">
          <span id="R">Ranking</span>
          <span id="M"> My Info</span>
          <span id="T">Talk</span>      
        </span>


      <div className="middle-contents_rank">
        <p className="middle-rank_info">Today's Ranking</p>
        <span className="contents-rank_list">
          <img src="first.png" width="5%"></img>
          <img src="country.png" width="5%"></img>
          <span className="contents-rank_name">name</span>
          <span className="contents-rank_score">score</span>
          <span className="contents-rank_extra">()</span>
        <br></br>
        </span>
        <span className="contents-rank_list">
          <img src="second.png" width="5%"></img>
          <img src="country.png" width="5%"></img>
          <span className="contents-rank_name">name</span>
          <span className="contents-rank_score">score</span>
          <span className="contents-rank_extra">()</span>
        </span>
        <br></br>
        <span className="contents-rank_list">
          <img src="third.png" width="5%"></img>
          <img src="country.png" width="5%"></img>
          <span className="contents-rank_name">name</span>
          <span className="contents-rank_score">score</span>
          <span className="contents-rank_extra">()</span>
        </span>
      </div>

      <div className="bottom-part_menu">
        <div className="bottom-menu_comp">Menu1</div>
        <div className="bottom-menu_comp">Menu2</div>
        <div className="bottom-menu_comp">Menu3</div>
        <div className="bottom-menu_comp">Menu4</div>
        <div className="bottom-menu_comp">Menu5</div>
      </div>

    </div>
  );
}

export default App;