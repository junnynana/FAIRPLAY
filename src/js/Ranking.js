import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import {Route, Link, Router} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import '../css/App.css';
import 'src\css\RankingDeco.scss'

function Ranking (props) {
    return (
        <div className="page">
            
            <div className="ranking-header">
                <h1 className="screen-header__icon">
                    <span className="screen-header__icon__bad"><img src="public\images\badminton.png"/></span>
                    <span className="screen-header__icon__menu">
                        <button type="button">
                            <img src="public\images\menu.png"/>
                        </button>
                    </span>
                    
                    <p className="screen-header__name"><span className="screen-header__name__deco">Ranking</span></p>
                </h1>
            </div>
        
            <div className="rank-container">
                
                <div className="rank-container__total">
                    <div className="rank-container__total__icon">
                        <p className="rank-container__total__info">Rank<br/>Total</p>
                        <img className="rank-container__total__comp" src="public\images\first.png"/>
                        <img className="rank-container__total__comp" src="public\images\second.png"/>
                        <img className="rank-container__total__comp" src="public\images\third.png"/>
                    </div>
                </div>

                <div className="rank-container__list">
                    <ol className="rank-container__list__main">
                        <li className="rank-container__list__number">
                            <img src="public\images\first.png" className="rank-container__list__numberImg"/>
                            <img src="public\images\country.png" className="rank-container__list__numberImg"/>
                            <span className="rank-container__list__userName">
                                <span className="user-name__data__first">Name</span>                               
                            </span>                            
                            <span className="rank-container__list__record">
                                <span className="first-record__data__first">15</span>
                            </span>
                            <span className="rank-container__list__record">
                                <span className="second-record__data__first">10</span>
                            </span>
                            <span className="rank-container__list__record">
                                <span className="third-record__data__first">5</span>                               
                            </span>
                            <span className="rank-container__list__totalRecord">
                                <span className="total-record__data__first">5</span>                               
                            </span>
                        </li>
                        <li className="rank-container__list__number">
                            <img src="public\images\second.png" className="rank-container__list__numberImg"/>
                            <img src="public\images\country.png" className="rank-container__list__numberImg"/>
                            <span className="rank-container__list__userName">
                                <span className="user-name__data__second">Name</span>                               
                            </span>                            
                            <span className="rank-container__list__record">
                                <span className="first-record__data__second">15</span>
                            </span>
                            <span className="rank-container__list__record">
                                <span className="second-record__data__second">10</span>
                            </span>
                            <span className="rank-container__list__record">
                                <span className="third-record__data__second">5</span>                               
                            </span>
                            <span className="rank-container__list__totalRecord">
                                <span className="total-record__data__second">5</span>                               
                            </span>
                        </li>
                        <li className="rank-container__list__number">
                            <img src="public\images\third.png" className="rank-container__list__numberImg"/>
                            <img src="public\images\country.png" className="rank-container__list__numberImg"/>
                            <span className="rank-container__list__userName">
                                <span className="user-name__data__third">Name</span>                               
                            </span>                            
                            <span className="rank-container__list__record">
                                <span className="first-record__data__third">15</span>
                            </span>
                            <span className="rank-container__list__record">
                                <span className="second-record__data__third">10</span>
                            </span>
                            <span className="rank-container__list__record">
                                <span className="third-record__data__third">5</span>                               
                            </span>
                            <span className="rank-container__list__totalRecord">
                                <span className="total-record__data__third">5</span>                               
                            </span>                            
                        </li>
                        <hr id="area-divide" ></hr>
                        <li className="rank-container__list__number">
                            <img src="public\images\third.png" className="rank-container__list__numberImg"/>
                            <img src="public\images\country.png" className="rank-container__list__numberImg"/>
                            <span className="rank-container__list__userName">
                                <span className="user-name__data__fourth">Name</span>                               
                            </span>                            
                            <span className="rank-container__list__record">
                                <span className="first-record__data__fourth">15</span>
                            </span>
                            <span className="rank-container__list__record">
                                <span className="second-record__data__fourth">10</span>
                            </span>
                            <span className="rank-container__list__record">
                                <span className="third-record__data__fourth">5</span>                               
                            </span>
                            <span className="rank-container__list__totalRecord">
                                <span className="total-record__data__fourth">5</span>                               
                            </span>
                        </li>
                        <li className="rank-container__list__number">
                            <img src="public\images\third.png" className="rank-container__list__numberImg"/>
                            <img src="public\images\country.png" className="rank-container__list__numberImg"/>
                            <span className="rank-container__list__userName">
                                <span className="user-name__data__fifth">Name</span>                               
                            </span>                            
                            <span className="rank-container__list__record">
                                <span className="first-record__data__fifth">15</span>
                            </span>
                            <span className="rank-container__list__record">
                                <span className="second-record__data__fifth">10</span>
                            </span>
                            <span className="rank-container__list__record">
                                <span className="third-record__data__fifth">5</span>                               
                            </span>
                            <span className="rank-container__list__totalRecord">
                                <span className="total-record__data__fifth">5</span>                               
                            </span>
                        </li>
                    </ol>
                </div>

            </div>

            <div className="rank-navigation"> 

                <div className="screen-navigation_comp"><a>menu1</a></div>
                <div className="screen-navigation_comp"><a>menu2</a></div>
                <div className="screen-navigation_comp"><a>menu3</a></div>
                <div className="screen-navigation_comp"><a>menu4</a></div>
                <div className="screen-navigation_comp"><a>menu5</a></div>

            </div>
        
        </div>
    );
}

export default Ranking;
