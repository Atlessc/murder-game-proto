import React, { useState } from 'react';
import data from './data/GameItems.json';
import './Game.css';

const characters = data.Characters;
const rooms = data.Rooms;
const weapons = data.Weapons;

const CharacterRoomTracker = {
    "Foyer": [],
    "Dining Room": [],
    "Kitchen": [],
    "Art Studio": [],
    "Library": [],
    "Living Room": [],
    "Master Bedroom": []
  };

const Game = () => {

    const [GameStart, setGameStart] = useState(false);
    const [msChar, setMsChar] = useState("");
    const [msRoom, setMsRoom] = useState("");
    const [msWeapon, setMsWeapon] = useState("");
    const [playerRoomTracker, setPlayerRoomTracker] = useState("");
    const [player, setPlayer] = useState({ name: "Detective", room: "" });

    const playerCurrentRoom = playerRoomTracker;

    const HandlePlayerRoom = (room) => {
        setPlayerRoomTracker(room);
    };

    const PlaceCharactersInRooms = (msChar, msRoom) => {
        // Create a copy of the characters array
        const charactersCopy = [...characters];


        // Find the index of msChar in the characters array
        const msCharIndex = charactersCopy.findIndex(character => character.name === msChar);

        // Remove msChar from the characters array
        charactersCopy.splice(msCharIndex, 1);


        // Shuffle the characters array
        for (let i = charactersCopy.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [charactersCopy[i], charactersCopy[j]] = [charactersCopy[j], charactersCopy[i]];
        }

        // Place the first 8 characters in rooms that do not equal msRoom
        const otherRooms = Object.keys(CharacterRoomTracker).filter(room => room !== msRoom);
        for (let i = 0; i < 8; i++) {
          const character = charactersCopy[i];
          const roomIndex = i % otherRooms.length;
          const roomName = otherRooms[roomIndex];
          CharacterRoomTracker[roomName].push(character.name);
        }
        // Place the remaining character and msChar in msRoom
        CharacterRoomTracker[msRoom].push(charactersCopy[8].name, msChar);
      }


      function InitializeGame() {
        setGameStart(true);
        const newMsChar = characters[Math.floor(Math.random() * characters.length)].name;
        const newMsRoom = rooms[Math.floor(Math.random() * rooms.length)].name;
        const newMsWeapon = weapons[Math.floor(Math.random() * weapons.length)].name;
        setPlayer(player => ({ ...player, room: "Foyer" }));

        setMsChar(newMsChar);
        setMsRoom(newMsRoom);
        setMsWeapon(newMsWeapon);
        PlaceCharactersInRooms(newMsChar, newMsRoom);
      }

      function test() {
        console.log(CharacterRoomTracker);
        console.log(player.room);
        console.log(msChar);
        console.log(msRoom);
        console.log(msWeapon);
      };

    return(
        <div className='VisualContainer'>
            <div className='RealVisContainer'>
                { GameStart ? null :
                <div className="StartGame Btn" onClick={InitializeGame}>Start Game</div>}
                <div className="Test Btn" onClick={test}>Test</div>
            </div>
            {/* <div className='ColorComp'>
                <ColorSetTesterComp />
            </div> */}
        </div>
    )
};

export default Game;