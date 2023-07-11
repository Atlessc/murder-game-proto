import React from "react";
import './WelcomePopUp.css';

export default function WelcomePopup() {
    return (
            <div className='Welcome'>
                <h1 className='Title'>Welcome to The Halls Whisper MURDER!</h1>
                <p className='paraPopUp'>This is a single player, murder mystery game where you play as "The Detective" and try to solve the murder of Dr.Warwick. When you arrive to His mansion for the dinner party, all you know is he is dead and everyone there is a suspect! <b>YOU</b> have to solve the mystery before the time runs out!
                <br/>
                WHO?! WHERE?! HOW?!
                <br/>
                This is where the game gets <i className='red'>spicy!</i>
                <br/>
                Each game will be different. With 10 Suspects, 7 Rooms, and 15 Weapons! There are over <b>1000</b> different stories to solve!</p>
            </div>
    );
}