import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import {Route, Link, Router} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './App.css';
import 'src\css\Talk.scss'


function Talk(props) {
    return (
        <div className="page">
            
            <div className="talk-header">
                <h1 className="screen-header__icon">
                    <span className="screen-header__icon__bad"><img src="public\images\badminton.png"/></span>
                    <span className="screen-header__icon__menu">
                        <button type="button">
                            <img src="public\images\menu.png"/>
                        </button>
                    </span>
                    
                    <p className="screen-header__name"><span className="screen-header__name__deco">Talk</span></p>
                </h1>
                <form className="talk-header__chatSearch">
                    <input type="text" placeholder="search chat room" className="talk-header__chatSearch__area"></input>
                </form>
            </div>


        
            <div className="talk-container">
                
                <div className="talk-container__profile">
                    <p className="talk-container__profile__user"><span className="userName-data__container"><b>NAME</b></span></p>
                    <img src="user.png" class="talk-container__profile"/>
                </div>
                <hr className="area-divide"></hr>

                <div className="talk-container__chatlist">


                    <span className="talk-container__chatlist__text">
                        <img src="public\images\talk.png" className="talk-container__chatlist__img"/>
                        <span className="roomTitle-data__first"> Room title </span>
                        <span className="roomMember-data__first"> 100 </span>
                        <span className="lastChat-time__data__first"> yesterday </span>
                    </span>
                    <span className="lastChat-data__first"> Hello, my name is blah blah ~~ </span>
                    <hr className="talk-container__chatlist__divide"></hr>


                    <span className="talk-container__chatlist__text">
                        <img src="public\images\talk.png" className="talk-container__chatlist__img"/>
                        <span className="roomTitle-data__second"> Room title </span>
                        <span className="roomMember-data__second"> 100 </span>
                        <span className="lastChat-time__data__second"> yesterday </span>
                    </span>
                    <span className="lastChat-data__second"> Hello, my name is blah blah ~~ </span>
                    <hr className="talk-container__chatlist__divide"></hr> 


                    <span className="talk-container__chatlist__text">
                        <img src="public\images\talk.png" className="talk-container__chatlist__img"/>
                        <span className="roomTitle-data__third"> Room title </span>
                        <span className="roomMember-data__third"> 100 </span>
                        <span className="lastChat-time__data__third"> yesterday </span>
                    </span>
                    <span className="lastChat-data__third"> Hello, my name is blah blah ~~ </span>
                    <hr className="talk-container__chatlist__divide"></hr> 


                    <span className="talk-container__chatlist__text">
                        <img src="public\images\talk.png" className="talk-container__chatlist__img"/>
                        <span className="roomTitle-data__fourth"> Room title </span>
                        <span className="roomMember-data__fourth"> 100 </span>
                        <span className="lastChat-time__data__fourth"> yesterday </span>
                    </span>
                    <span className="lastChat-data__fourth"> Hello, my name is blah blah ~~ </span>
                    <hr className="talk-container__chatlist__divide"></hr>


                    <span className="talk-container__chatlist__text">
                        <img src="public\images\talk.png" className="talk-container__chatlist__img"/>
                        <span className="roomTitle-data__fifth"> Room title </span>
                        <span className="roomMember-data__fifth"> 100 </span>
                        <span className="lastChat-time__data__fifth"> yesterday </span>
                        </span>
                    <span className="lastChat-data__fifth"> Hello, my name is blah blah ~~ </span>
                    <hr className="talk-container__chatlist__divide"></hr>

                </div>


            </div>

            <div className="talk-navigation"> 

                <div className="screen-navigation_comp"><a>menu1</a></div>
                <div className="screen-navigation_comp"><a>menu2</a></div>
                <div className="screen-navigation_comp"><a>menu3</a></div>
                <div className="screen-navigation_comp"><a>menu4</a></div>
                <div className="screen-navigation_comp"><a>menu5</a></div>

            </div>
        
        </div>
    );
}

export default Talk;