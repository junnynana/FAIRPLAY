import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Route, Link, Router} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './App.css';
import './MyInfoDeco.scss'


function MyInfo(props) {
    return (
        <div className="page">
            
            <div className="myInfo-header">
                <h1 className="screen-header__icon">
                    <span className="screen-header__icon__bad"><img src="public\images\badminton.png" /></span>
                    <span className="screen-header__icon__menu">
                        <button type="button">
                            <img src="public\images\menu.png" />
                        </button>
                    </span>
                    
                    <p className="screen-header__name"><span className="screen-header__name__deco">My Info</span></p>
                </h1>
            </div>


        
            <div className="myInfo-container">
                
                <div className="myInfo-container__profile">
                    <p className="myInfo-container__profile__user">Hello,<span className="userName-data__container"><b>Name</b></span>!</p>
                    <img src="user.png" class="myInfo-container__profile" />
                </div>
                <hr></hr>

                <div className="myInfo-container__basic">
                    <p className="basicInfo-txt">Basic info</p>
                    <ul className="myInfo-container__basic__area">
                        <li className="basic__info"> 
                            <span>Nationality</span>
                            <span className="nationalityData">
                            <span className="nationalityData__user">usa</span>
                            <img src="public\images\country.png" className="myInfo-container__basicImg" />
                            </span>
                        </li>
                        <li className="basic__info"> 
                            <span>Name</span>
                            <span className="nameData__user">JJ. Lee</span>
                        </li>
                        <li className="basic__info"> 
                            <span>Birthday</span>
                            <span className="birthdayData__user">Sep 10, 1989</span>
                        </li>
                        <li className="basic__info"> 
                            <span>Gender</span>
                            <span className="genderData__user">Male</span>
                        </li>                      
                    </ul>
                </div>

                <div className="myInfo-container__team">
                    <p className="teamInfo-txt">Team info</p>
                    <ul className="myInfo-container__team__area">
                        <li className="team__info"> 
                            <span>Region</span>
                            <span className="reigionData">
                            <span className="regionData__user">korea</span>
                            <img src="public\images\country.png" className="myInfo-container__teamImg" />
                            </span>
                        </li>
                        <li className="team__info"> 
                            <span>Name</span>
                            <span className="teamName-data__user">NextStep</span>
                        </li>
                        <li className="team__info"> 
                            <span>Since</span>
                            <span className="sinceData__user">Sep 10, 2018</span>
                        </li>
                        <li className="team__info"> 
                            <span>Rank</span>
                            <span className="team-rankData">
                            <span>No.<span className="team-rankData__user">1</span></span>
                            <img src="public\images\first.png" className="myInfo-container__teamImg" />
                            </span>
                        </li>                      
                    </ul>
                </div>

            </div>

            <div className="myInfo-navigation"> 

                <div className="screen-navigation_comp"><a>menu1</a></div>
                <div className="screen-navigation_comp"><a>menu2</a></div>
                <div className="screen-navigation_comp"><a>menu3</a></div>
                <div className="screen-navigation_comp"><a>menu4</a></div>
                <div className="screen-navigation_comp"><a>menu5</a></div>

            </div>
        
        </div>
    );
}

export default MyInfo;