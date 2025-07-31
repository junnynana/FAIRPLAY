import React from 'react';
import logo from './logo.svg';
import {Route, Link, Router} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import '../css/App.css';
import '../css/deco.scss'


function App(props) {
  return (
    <div className="entire">
      
        <div className="app-header">
          <h1 className="app-header__icon">
            <span className="app-header__icon__bad"><img src="public\images\badminton.png"/></span>
            <span className="app-header__icon__menu">
              <button type="button">
                <img src="public\images\menu.png"/>
              </button>
            </span>
                    
            <p className="app-header__name"><span className="app-header__name__deco">Fair<br/>play;</span></p>
          </h1>
        </div>

      <div className="app-container">
        <span class="app-container__user">Hello,<b><span className="UserName-data">Name</span>!</b></span>
        <img src="user.png" class="app-container__profile"/>
      </div>  
        <hr/>

      <div className="app-container__contents">
        <span className="Button">
          <button type="button" class="app-container__contents__bt" ><img src="ranking.png"/></button>
          <button type="button" class="app-container__contents__bt"><img src="myinfo.png"/></button>
          <button type="button" class="app-container__contents__bt"><img src="talk.png"/></button>
        </span>
        <br></br>
      </div>  

        <span className ="app-container__contents__info">
          <span id="Rank-Info">Ranking</span>
          <span id="MY-Info"> My Info</span>
          <span id="Talk-Info">Talk</span>      
        </span>

    <div className="app-container__rank">
      <p className="app-container__rank__info">Today's Ranking</p>
      <ol>
        <li className="app-container__rank__list">
          <img src="first.png"/>
          <img src="country.png"/>
          <span className="app-container__rank__name"><span className="NameData-rank__first">name</span></span>
          <span className="app-container__rank__score"><span className="ScoreData-rank__first">score</span></span>
          <span className="app-container__rank__extra"><span className="ExtraData-rank__first">()</span></span>
          <br></br>         
        </li>
        <li className="app-container__rank__list">
          <img src="second.png"/>
          <img src="country.png"/>
          <span className="app-container__rank__name"><span className="NameData-rank__second">name</span></span>
          <span className="app-container__rank__score"><span className="ScoreData-rank__second">score</span></span>
          <span className="app-container__rank__extra"><span className="ExtraData-rank__second">()</span></span>
        </li>
        <li className="app-container__rank__list">
          <img src="third.png"/>
          <img src="country.png"/>
          <span className="app-container__rank__name"><span className="NameData-rank__third">name</span></span>
          <span className="app-container__rank__score"><span className="ScoreData-rank__third">score</span></span>
          <span className="app-container__rank__extra"><span className="ExtraData-rank__third">()</span></span>
        </li>
      </ol>
    </div>

      <div className="app-navigation__menu">
        <div className="app-navigation__comp">Menu1</div>
        <div className="app-navigation__comp">Menu2</div>
        <div className="app-navigation__comp">Menu3</div>
        <div className="app-navigation__comp">Menu4</div>
        <div className="app-navigation__comp">Menu5</div>
      </div>

    </div>
  );
}

export default App;