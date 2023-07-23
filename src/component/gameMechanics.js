// gameMechanics.js
import data from './data/GameItems.json';
import useStore from './store';

const characters = data.Characters;
const rooms = data.Rooms;
const weapons = data.Weapons;

const characterRoomTracker = {
    'Foyer': [],
    'Dining Room': [],
    'Kitchen': [],
    'Art Studio': [],
    'Library': [],
    'Living Room': [],
    'Master Bedroom': []
    };

    export function InitializeGame() {
      const { setMsChar, setMsRoom, setMsWeapon, setPlayerRoom, setGameStatus } = useStore.getState();
      const newMsChar = characters[Math.floor(Math.random() * characters.length)].name;
      const newMsRoom = rooms[Math.floor(Math.random() * rooms.length)].name;
      const newMsWeapon = weapons[Math.floor(Math.random() * weapons.length)].name;
      setPlayerRoom('Foyer');
      setMsChar(newMsChar);
      setMsRoom(newMsRoom);
      setMsWeapon(newMsWeapon);
      const charactersCopy = [...characters];
      const GameStatus = useStore.getState().gameStatus;
    
      // Find the index of msChar in the characters array
      const msCharIndex = charactersCopy.findIndex(character => character.name === newMsChar);
    
      // Remove msChar from the characters array
      charactersCopy.splice(msCharIndex, 1);
    
      // Shuffle the characters array
      for (let i = charactersCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [charactersCopy[i], charactersCopy[j]] = [charactersCopy[j], charactersCopy[i]];
      }
    
      // Place the first 8 characters in rooms that do not equal msRoom
      const otherRooms = Object.keys(characterRoomTracker).filter(room => room !== newMsRoom);
      for (let i = 0; i < 8; i++) {
        const character = charactersCopy[i];
        const roomIndex = i % otherRooms.length;
        const roomName = otherRooms[roomIndex];
        characterRoomTracker[roomName].push(character.name);
      }
      
      // Place the remaining character and msChar in msRoom
      characterRoomTracker[newMsRoom].push(charactersCopy[8].name, newMsChar);
      useStore.setState({gameStatus: 'Active'})
      console.log(GameStatus);
    }

export function playerChangeRoom(playerCurrentRoom, setPlayerRoom) {
    // Display a list of rooms for the player to move to
    console.log("Choose a room to move to:");
    for (const roomName of Object.keys(characterRoomTracker)) {
      if (roomName === playerCurrentRoom) {
        // If the room is the player's current room, gray it out
        console.log(`  [${roomName}]`);
      } else {
        // If the room is not the player's current room, make it selectable
        console.log(`  ${roomName}`);
      }
    }

    // For the sake of this example, let's say the player chooses the first available room
    const availableRooms = Object.keys(characterRoomTracker).filter(
      roomName => roomName !== playerCurrentRoom
    );
    const newRoom = availableRooms[0];
    setPlayerRoom(newRoom);

    console.log(`Player moved to ${newRoom}`);
  }

export function moveCharacters(characterRoomTracker, isCharacterBeingInterviewed) {
    // Loop through the characterRoomTracker object
    for (const [roomName, charactersInRoom] of Object.entries(characterRoomTracker)) {
      // Loop through the characters in the current room
      console.log(`Moving characters in ${roomName}`);
      for (let i = 0; i < charactersInRoom.length; i++) {
        const character = charactersInRoom[i];
        console.log(`Moving ${character.name}`);

        // Calculate a delay for this character's move based on their index
        const delay = i * 5000;

        // Schedule this character's move after the calculated delay
        setTimeout(() => {
          // Check if the character is currently being interviewed
          if (isCharacterBeingInterviewed(character)) {
            // If the character is being interviewed, skip to the next character
            return;
          }

          // Roll a random number between 0 and 100
          const roll = Math.random() * 100;
          console.log(`Rolled ${roll}`);

          // Check if the roll is less than or equal to 15
          if (roll <= 15) {
            console.log(`Moving ${character.name}`);
            // If the roll is less than or equal to 15, move the character to a random room
            const otherRooms = Object.keys(characterRoomTracker).filter(
              otherRoomName => otherRoomName !== roomName
            );
            const newRoomIndex = Math.floor(Math.random() * otherRooms.length);
            const newRoomName = otherRooms[newRoomIndex];
            console.log(`Moving ${character.name} to ${newRoomName}`);

            // Remove the character from the current room
            charactersInRoom.splice(i, 1);
            i--;

            // Add the character to the new room
            characterRoomTracker[newRoomName].push(character);
            console.log(`Moved ${character.name} to ${newRoomName}, moving on...`);
          }
        }, delay);
      }
    }
  }

export function PauseGame() {
    const { setGameStatus } = useStore.getState();
    setGameStatus('Paused');
  }