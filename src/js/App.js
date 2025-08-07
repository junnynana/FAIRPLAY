import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Route, Link, Router} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import '../css/App.css';
import '../css/deco.scss'


function App(props) {
  return (
    <div className="entire">

        <div className="app-header">
          <h1 className="screen-header__icon">
            <span className="screen-header__icon__bad"><img src="public\images\badminton.png" /></span>
            <span className="screen-header__icon__menu">
              <button type="button">
                <img src="public\images\menu.png" />
              </button>
            </span>
                    
            <p className="screen-header__name"><span className="screen-header__name__deco">Fair<br/>play;</span></p>
          </h1>
        </div>

      <div className="app-container">
        <span class="app-container__user">Hello,<b><span className="user-name__data">Name</span>!</b></span>
        <img src="user.png" class="app-container__profile" />
      </div>  
        <hr/>

      <div className="app-container__contents">
        <span className="Button-set">
          <button type="button" class="app-container__contents__bt" ><img src="ranking.png"/></button>
          <button type="button" class="app-container__contents__bt"><img src="myinfo.png"/></button>
          <button type="button" class="app-container__contents__bt"><img src="talk.png"/></button>
        </span>
        <br></br>
      </div>  

        <span className ="app-container__contents__info">
          <span className="rank-Info">Ranking</span>
          <span className="my-Info"> My Info</span>
          <span className="talk-Info">Talk</span>      
        </span>

    <div className="app-container__rank">
      <p className="app-container__rank__info">Today's Ranking</p>
      <ol>
        <li className="app-container__rank__list">
          <img src="first.png" className="app-container__rank__listImg" />
          <img src="country.png" className="app-container__rank__listImg" />
          <span className="app-container__rank__name"><span className="name-data__rank__first">name</span></span>
          <span className="app-container__rank__score"><span className="score-data__rank__first">score</span></span>
          <span className="app-container__rank__extra"><span className="extra-data__rank__first">()</span></span>
          <br></br>         
        </li>
        <li className="app-container__rank__list">
          <img src="second.png" className="app-container__rank__listImg" />
          <img src="country.png" className="app-container__rank__listImg" />
          <span className="app-container__rank__name"><span className="name-data__rank__second">name</span></span>
          <span className="app-container__rank__score"><span className="score-data__rank__second">score</span></span>
          <span className="app-container__rank__extra"><span className="extra-data__rank__second">()</span></span>
        </li>
        <li className="app-container__rank__list">
          <img src="third.png" className="app-container__rank__listImg" />
          <img src="country.png" className="app-container__rank__listImg" />
          <span className="app-container__rank__name"><span className="name-data__rank__third">name</span></span>
          <span className="app-container__rank__score"><span className="score-data__rank__third">score</span></span>
          <span className="app-container__rank__extra"><span className="extra-data__rank__third">()</span></span>
        </li>
      </ol>
    </div>

      <div className="app-navigation">
        <div className="screen-navigation__comp"><a>Menu1</a></div>
        <div className="screen-navigation__comp"><a>Menu2</a></div>
        <div className="screen-navigation__comp"><a>Menu3</a></div>
        <div className="screen-navigation__comp"><a>Menu4</a></div>
        <div className="screen-navigation__comp"><a>Menu5</a></div>
      </div>

    </div>
  );
}

export default App;