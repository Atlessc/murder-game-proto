import React, { useState, useEffect } from 'react';
import data from './GameItems.json';

const characters = data.Characters;
const rooms = data.Rooms;
const weapons = data.Weapons;

console.log(characters.map(character => character.name));
console.log(rooms.map(room => room.name));
console.log(weapons.map(weapon => weapon.name));

const Game = () => {

    const CharacterRoomTracker = {
        kitchen: [],
        library: [],
        masterBedroom: [],
        diningRoom: [],
        foyer: [],
        artStudio: [],
        livingRoom: []
    };

    const [msChar, setMsChar] = useState("");
    const [msRoom, setMsRoom] = useState("");
    const [msWeapon, setMsWeapon] = useState("");

    const [playerRoomTracker, setPlayerRoomTracker] = useState("Foyer");

    const playerCurrentRoom = playerRoomTracker;

    const HandlePlayerRoom = (room) => {
        setPlayerRoomTracker(room);
    };

    return(
        null
    )
};

export default Game;