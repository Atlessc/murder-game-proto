import React from "react";
import './WelcomePopUp.css';

export default function WelcomePopup() {
    return (
            <div className='Welcome'>
                <h1 className='Title'>Welcome to The Halls Whisper MURDER!</h1>
                <p className='paraPopUp'>This is a single player, murder mystery game where you play as <b className="red">"The Detective"</b> and try to solve the murder of <b className="red">Dr. Charles Warwick.</b> When you arrive to His mansion for the dinner party, all you know is he is dead and everyone there is a suspect! <b className="red">YOU</b> have to solve the mystery before the time runs out!
                <br/>
                <b className="red">WHO?! WHERE?! HOW?!</b>
                <br/>
                This is where the game gets <b><i className='red'>spicy!</i></b>
                <br/>
                Each game will be different. With 10 Suspects, 7 Rooms, and 15 Weapons! There are over <b className="red">1000</b> different stories to solve!</p>
            </div>
    );
}