import React from 'react';
import logo from './logo.svg';
import {Route, Link, Router} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import 'src\css\Talk.scss'


function Talk(props) {
    return (
        <div className="page">
            
            <div className="Talk-header">
                <h1 className="Talk-header__icon">
                    <span className="Talk-header__icon__bad"><img src="public\images\badminton.png"/></span>
                    <span className="Talk-header__icon__menu">
                        <button type="button">
                            <img src="public\images\menu.png"/>
                        </button>
                    </span>
                    
                    <p className="Talk-header__name"><span className="Talk-header__name__deco">Talk</span></p>
                </h1>
                <form className="Talk-header__ChatSearch">
                    <input type="text" placeholder="search chat room"></input>
                </form>
            </div>


        
            <div className="Talk-container">
                
                <div className="Talk-container__profile">
                    <p className="Talk-container__profile__user"><span className="UserName-data__container"><b>NAME</b></span></p>
                    <img src="user.png" class="Talk-container__profile"/>
                </div>
                <hr id="area-divide"></hr>

                <div className="Talk-container__chatlist">


                    <span className="Talk-container__chatlist__text">
                        <img src="public\images\talk.png"/>
                        <span className="RoomTitle-data__first"> Room title </span>
                        <span className="RoomMember-data__first"> 100 </span>
                        <span className="LastChat-time__data__first"> yesterday </span>
                    </span>
                    <span className="LastChat-data__first"> Hello, my name is blah blah ~~ </span>
                    <hr></hr>


                    <span className="Talk-container__chatlist__text">
                        <img src="public\images\talk.png"/>
                        <span className="RoomTitle-data__second"> Room title </span>
                        <span className="RoomMember-data__second"> 100 </span>
                        <span className="LastChat-time__data__second"> yesterday </span>
                    </span>
                    <span className="LastChat-data__second"> Hello, my name is blah blah ~~ </span>
                    <hr></hr> 


                    <span className="Talk-container__chatlist__text">
                        <img src="public\images\talk.png"/>
                        <span className="RoomTitle-data__third"> Room title </span>
                        <span className="RoomMember-data__third"> 100 </span>
                        <span className="LastChat-time__data__third"> yesterday </span>
                    </span>
                    <span className="LastChat-data__third"> Hello, my name is blah blah ~~ </span>
                    <hr></hr> 


                    <span className="Talk-container__chatlist__text">
                        <img src="public\images\talk.png"/>
                        <span className="RoomTitle-data__fourth"> Room title </span>
                        <span className="RoomMember-data__fourth"> 100 </span>
                        <span className="LastChat-time__data__fourth"> yesterday </span>
                    </span>
                    <span className="LastChat-data__fourth"> Hello, my name is blah blah ~~ </span>
                    <hr></hr>


                    <span className="Talk-container__chatlist__text">
                        <img src="public\images\talk.png"/>
                        <span className="RoomTitle-data__fifth"> Room title </span>
                        <span className="RoomMember-data__fifth"> 100 </span>
                        <span className="LastChat-time__data__fifth"> yesterday </span>
                        </span>
                    <span className="LastChat-data__fifth"> Hello, my name is blah blah ~~ </span>
                    <hr></hr>

                </div>


            </div>

            <div className="Talk-navigation"> 

                <div className="Talk-navigation_comp">Menu1</div>
                <div className="Talk-navigation_comp">Menu2</div>
                <div className="Talk-navigation_comp">Menu3</div>
                <div className="Talk-navigation_comp">Menu4</div>
                <div className="Talk-navigation_comp">Menu5</div>

            </div>
        
        </div>
    );
}

export default Talk;