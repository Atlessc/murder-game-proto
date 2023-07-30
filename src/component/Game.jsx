// Game.jsx
import React from 'react';
import './styles/Game.css';
import './styles/Overlay.css';
import ActionMenu from './ActionMenu';
import DialogBox from './DialogBox';
import Notepad from './Notepad';
import useStore from './store';
import { InitializeGame } from './gameMechanics';
import DevConsole from './DevConsole';
import Timer from './Timer';
import PlayerChangeRoom from './RoomChanger';
import data from './data/GameItems.json';

const characters = data.Characters;
const rooms = data.Rooms;

const Game = () => {
  const {
    showNotepad,
    characterRoomTracker,
    msRoom,
    msChar,
    msWeapon,
    msVictim,
    playerRoom,
    gameStatus,
    noteSuspects,
    roomMenu,
    charMoved,
    setCharMoved,
    setCharacterRoomTracker,
  } = useStore(state => ({
    showNotepad: state.showNotepad,
    characterRoomTracker: state.characterRoomTracker,
    msRoom: state.msRoom,
    msChar: state.msChar,
    msWeapon: state.msWeapon,
    msVictim: state.msVictim,
    playerRoom: state.playerRoom,
    gameStatus: state.gameStatus,
    noteSuspects: state.noteSuspects,
    roomMenu: state.roomMenu,
    charMoved: state.charMoved,
    setCharMoved: state.setCharMoved,
    setCharacterRoomTracker: state.setCharacterRoomTracker,
  }));

  function moveCharacter(characterRoomTracker, characters, charMoved, setCharMoved) {
    // Get the character based on the charMoved value
    const character = characters[charMoved];

    // Find the current room of the character
    let currentRoom;
    for (const [room, charactersInRoom] of Object.entries(characterRoomTracker)) {
      if (charactersInRoom.includes(character.name)) {
        currentRoom = room;
        break;
      }
    }

    // Create a list of available rooms
    let roomsAvailable = Object.keys(characterRoomTracker).filter(room => room !== currentRoom);

    // Shuffle the available rooms
    for (let i = roomsAvailable.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [roomsAvailable[i], roomsAvailable[j]] = [roomsAvailable[j], roomsAvailable[i]];
    }

    // Choose a random room
    const newRoom = roomsAvailable[Math.floor(Math.random() * roomsAvailable.length)];

    // Move the character to the new room
    characterRoomTracker[currentRoom] = characterRoomTracker[currentRoom].filter(name => name !== character.name);
    characterRoomTracker[newRoom].push(character.name);
    console.log(`Moving ${character.name} from ${currentRoom} to ${newRoom}`);

    // Update charMoved value using setCharMoved
    setCharMoved((charMoved + 1) % characters.length);
  }

  const Test = () => {
    console.log(`You are in the ${playerRoom}`);
    console.log(`The Murderer is ${msChar}`);
    console.log(`The Murder happened in the ${msRoom}`);
    console.log(`${msChar} used the ${msWeapon} to kill ${msVictim}`);
    console.log({gameStatus})
    console.log({noteSuspects})
    console.log({roomMenu})
    console.log(characterRoomTracker);
  };

  function TestMover() {
    moveCharacter(characterRoomTracker, characters, charMoved, setCharMoved, setCharacterRoomTracker);
  }

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
        <div className='supBtn'>
        <a className='SupportBtn' href='https://ko-fi.com/web54devco' target='_blank' >
          <div className='message'>
            <div className='emoji'>👽</div>Support My Work<div className='emoji'>👾</div>
          </div>
        </a>
        </div>
        </div>
        {
          gameStatus ?
            <div className="StartGame Btn" onClick={InitializeGame}>
              Start Game
            </div>
            :
            null
        }
        <div className='TestMover Btn' onClick={TestMover}>Test Mover</div>
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
