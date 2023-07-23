// Game.jsx
import React, { useEffect } from 'react';
import './Game.css';
import './Overlay.css';
import ActionMenu from './ActionMenu';
import DialogBox from './DialogBox';
import Notepad from './Notepad';
import POV from './POV';
import useStore from './store';
import { InitializeGame, moveCharacters } from './gameMechanics';
import { characters } from './CharacterObjects';
import DevConsole from './DevConsole';
import Timer from './Timer';

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

  };

  return (
    <div className='POV'>
      <Timer />
      <DevConsole />
        {gameStatus ?
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
        <ActionMenu />
        <DialogBox />
    </div>
  );
};

export default Game;
