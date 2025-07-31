import React from 'react';
import logo from './logo.svg';
import {Route, Link, Router} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import '../css/App.css';
import 'src\css\RankingDeco.scss'

function Ranking (props) {
    return (
        <div className="page">
            
            <div className="rank-header">
                <h1 className="rank-header__icon">
                    <span className="rank-header__icon__bad"><img src="public\images\badminton.png"/></span>
                    <span className="rank-header__icon__menu">
                        <button type="button">
                            <img src="public\images\menu.png"/>
                        </button>
                    </span>
                    
                    <p className="rank-header__name"><span className="rank-header__name__deco">Ranking</span></p>
                </h1>
            </div>
        
            <div className="rank-container">
                
                <div className="rank-container__total">
                    <div className="rank-container__total__icon">
                        <p>Rank<br/>Total</p>
                        <img src="public\images\first.png"/>
                        <img src="public\images\second.png"/>
                        <img src="public\images\third.png"/>
                    </div>
                </div>

                <div className="rank-container__list">
                    <ol>
                        <li className="rank-container__list__number">
                            <img src="public\images\first.png"/>
                            <img src="public\images\country.png" className="CountryData__first"/>
                            <span className="rank-container__list__UserName">
                                <span className="UserName-data__first">Name</span>                               
                            </span>                            
                            <span className="rank-container__list__Record">
                                <span className="FirstRecord-data__first">15</span>
                            </span>
                            <span className="rank-container__list__Record">
                                <span className="SecondRecord-data__first">10</span>
                            </span>
                            <span className="rank-container__list__Record">
                                <span className="ThirdRecord-data__first">5</span>                               
                            </span>
                            <span className="rank-container__list__TotalRecord">
                                <span className="TotalRecord-data_first">5</span>                               
                            </span>
                        </li>
                        <li className="rank-container__list__number">
                            <img src="public\images\second.png"/>
                            <img src="public\images\country.png" className="CountryData__second"/>
                            <span className="rank-container__list__UserName">
                                <span className="UserName-data__second">Name</span>                               
                            </span>                            
                            <span className="rank-container__list__Record">
                                <span className="FirstRecord-data__second">15</span>
                            </span>
                            <span className="rank-container__list__Record">
                                <span className="SecondRecord-data__second">10</span>
                            </span>
                            <span className="rank-container__list__Record">
                                <span className="ThirdRecord-data__second">5</span>                               
                            </span>
                            <span className="rank-container__list__TotalRecord">
                                <span className="TotalRecord-data__second">5</span>                               
                            </span>
                        </li>
                        <li className="rank-container__list__number">
                            <img src="public\images\third.png" />
                            <img src="public\images\country.png" className="CountryData__third"/>
                            <span className="rank-container__list__UserName">
                                <span className="UserName-data__third">Name</span>                               
                            </span>                            
                            <span className="rank-container__list__Record">
                                <span className="FirstRecord-data__third">15</span>
                            </span>
                            <span className="rank-container__list__Record">
                                <span className="SecondRecord-data__third">10</span>
                            </span>
                            <span className="rank-container__list__Record">
                                <span className="ThirdRecord-data__third">5</span>                               
                            </span>
                            <span className="rank-container__list__TotalRecord">
                                <span className="TotalRecord-data__third">5</span>                               
                            </span>                            
                        </li>
                        <hr id="area-divide" ></hr>
                        <li className="rank-container__list__number">
                            <img src="public\images\third.png"/>
                            <img src="public\images\country.png" className="CountryData__fourth"/>
                            <span className="rank-container__list__UserName">
                                <span className="UserName-data__fourth">Name</span>                               
                            </span>                            
                            <span className="rank-container__list__Record">
                                <span className="FirstRecord-data__fourth">15</span>
                            </span>
                            <span className="rank-container__list__Record">
                                <span className="SecondRecord-data__fourth">10</span>
                            </span>
                            <span className="rank-container__list__Record">
                                <span className="ThirdRecord-data__fourth">5</span>                               
                            </span>
                            <span className="rank-container__list__TotalRecord">
                                <span className="TotalRecord-data__fourth">5</span>                               
                            </span>
                        </li>
                        <li className="rank-container__list__number">
                            <img src="public\images\third.png"/>
                            <img src="public\images\country.png" className="CountryData__fifth"/>
                            <span className="rank-container__list__UserName">
                                <span className="UserName-data__fifth">Name</span>                               
                            </span>                            
                            <span className="rank-container__list__Record">
                                <span className="FirstRecord-data__fifth">15</span>
                            </span>
                            <span className="rank-container__list__Record">
                                <span className="SecondRecord-data__fifth">10</span>
                            </span>
                            <span className="rank-container__list__Record">
                                <span className="ThirdRecord-data__fifth">5</span>                               
                            </span>
                            <span className="rank-container__list__TotalRecord">
                                <span className="TotalRecord-data__fifth">5</span>                               
                            </span>
                        </li>
                    </ol>
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

export default Ranking;
