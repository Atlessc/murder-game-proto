// Game.jsx
import React, { useEffect } from 'react';
import './styles/Game.css';
import './styles/Overlay.css';
import ActionMenu from './ActionMenu';
import DialogBox from './DialogBox';
import Notepad from './Notepad';
import POV from './POV';
import useStore from './store';
import { InitializeGame, moveCharacters } from './gameMechanics';
import { characters } from './CharacterObjects';
import DevConsole from './DevConsole';
import Timer from './Timer';
import PlayerChangeRoom from './RoomChanger';

const Game = () => {
  const gameStart = useStore(state => state.gameStart);
  const initializeGame = useStore(state => state.initializeGame);
  const showNotepad = useStore(state => state.showNotepad);
  const setMsChar = useStore(state => state.setMsChar);
  const setMsRoom = useStore(state => state.setMsRoom);
  const setMsWeapon = useStore(state => state.setMsWeapon);
  const setPlayerRoom = useStore(state => state.setPlayerRoom);
  const characterRoomTracker = useStore(state => state.characterRoomTracker);
  const placeCharactersInRooms = useStore(state => state.placeCharactersInRooms);
  const msRoom = useStore(state => state.msRoom);
  const msChar = useStore(state => state.msChar);
  const msWeapon = useStore(state => state.msWeapon);
  const msVictim = useStore(state => state.msVictim);
  const playerRoom = useStore(state => state.playerRoom);
  const gameStatus = useStore(state => state.gameStatus);
  const noteSuspects = useStore(state => state.noteSuspects);
  const roomMenu = useStore(state => state.roomMenu);




  useEffect(() => {
    if (gameStart === true) {
      // Run the moveCharacters function every 30 seconds
      const intervalId = setInterval(() => {
        moveCharacters(characterRoomTracker, character => {
          // Find the character object with the given name
          const characterObject = characters.find(c => c.name === character);

          // Return the value of the currBeingInterviewed property
          return characterObject.currBeingInterviewed;
        });
      }, 30000);

      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [gameStart, characterRoomTracker]);

  const Test = () => {
    console.log(characterRoomTracker);
    console.log(`You are in the ${playerRoom}`);
    console.log(`The Murderer is ${msChar}`);
    console.log(`The Murder happened in the ${msRoom}`);
    console.log(`${msChar} used the ${msWeapon} to kill ${msVictim}`);
    console.log({gameStatus})
    console.log({noteSuspects})
    console.log({roomMenu})

  };

  return (
    <div className='POV'>
      <Timer />
      <DevConsole />
      <div className='News'>
        <h3>Thank you for visting! (last update 07/23/2023)</h3>
        <p className='warning'>Warning: if the layout looks weird, set the window to 1200x800</p>
        <p><b>We are still working on everything but if you want to see what we have already, here's a list of what is working:</b></p>
        <ol>
          <li>The Room button will change the player's current room</li>
          <li>The notepad works and retains the notes!</li>
          <li>The red input up top is a dev console for testers and devs to make sure the states are charging to the correct values and at the right times</li>
          <li className='warning'><b>So much more to come but there may be a bit of a break between updates</b></li>
        </ol>
        <a className='SupportBtn' href='https://ko-fi.com/web54devco' target='_blank' >
          <div className='message'>
            <div className='emoji'>👽</div>Support My Work<div className='emoji'>👾</div>
          </div>
        </a>
        </div>
        {
          gameStatus ?
            <div className="StartGame Btn" onClick={InitializeGame}>
              Start Game
            </div>
          :
            null
        }
        <div className='Test Btn' onClick={Test}>Test</div>
        {showNotepad ?
          <div>
            <Notepad/>
          </div>
          :
          null
        }
        {roomMenu ?
        <>
          <PlayerChangeRoom />
        </>
        :
        null
      }
        <ActionMenu />
        <DialogBox />
    </div>
  );
};

export default Game;
