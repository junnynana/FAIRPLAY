import React from 'react';
import logo from './logo.svg';
import {Route, Link, Router} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import './MyInfoDeco.scss'


function MyInfo(props) {
    return (
        <div className="page">
            
            <div className="MyInfo-header">
                <h1 className="MyInfo-header__icon">
                    <span className="MyInfo-header__icon__bad"><img src="public\images\badminton.png"/></span>
                    <span className="MyInfo-header__icon__menu">
                        <button type="button">
                            <img src="public\images\menu.png"/>
                        </button>
                    </span>
                    
                    <p className="MyInfo-header__name"><span className="MyInfo-header__name__deco">My Info</span></p>
                </h1>
            </div>


        
            <div className="MyInfo-container">
                
                <div className="MyInfo-container__profile">
                    <p className="MyInfo-container__profile__user">Hello,<span className="UserName-data__container"><b>Name</b></span>!</p>
                    <img src="user.png" class="MyInfo-container__profile"/>
                </div>
                <hr></hr>

                <div className="MyInfo-container__basic">
                    <p id="BasicInfo-txt">Basic info</p>
                    <ul>
                        <li className="basic__Nationality"> 
                            <span>Nationality</span>
                            <span className="NationalityData">
                            <span className="NationalityData-user">usa</span>
                            <img src="public\images\country.png"/>
                            </span>
                        </li>
                        <li className="basic__Name"> 
                            <span>Name</span>
                            <span className="NameData-user">JJ. Lee</span>
                        </li>
                        <li className="basic__Birthday"> 
                            <span>Birthday</span>
                            <span className="BirthdayData-user">Sep 10, 1989</span>
                        </li>
                        <li className="basic__Gender"> 
                            <span>Gender</span>
                            <span className="GenderData-user">Male</span>
                        </li>                      
                    </ul>
                </div>

                <div className="MyInfo-container__Team">
                    <p id="TeamInfo-txt">Team info</p>
                    <ul>
                        <li className="Team__Region"> 
                            <span>Region</span>
                            <span className="ReigionData">
                            <span className="RegionData-user">korea</span>
                            <img src="public\images\country.png"/>
                            </span>
                        </li>
                        <li className="Team__Name"> 
                            <span>Name</span>
                            <span className="TeamnameData-user">NextStep</span>
                        </li>
                        <li className="Team__Since"> 
                            <span>Since</span>
                            <span className="SinceData-user">Sep 10, 2018</span>
                        </li>
                        <li className="Team__Rank"> 
                            <span>Rank</span>
                            <span className="Team-rankData">
                            <span>No.<span className="Team-rankData-user">1</span></span>
                            <img src="public\images\first.png"/>
                            </span>
                        </li>                      
                    </ul>
                </div>

            </div>

            <div className="rank-navigation"> 

                <div className="rank-navigation_comp">Menu1</div>
                <div className="rank-navigation_comp">Menu2</div>
                <div className="rank-navigation_comp">Menu3</div>
                <div className="rank-navigation_comp">Menu4</div>
                <div className="rank-navigation_comp">Menu5</div>

            </div>
        
        </div>
    );
}

export default MyInfo;