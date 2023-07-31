import { useEffect } from 'react';
import data from './data/GameItems.json';
import useStore from './store';
import './styles/CharacterMover.css';

const CharacterMover = ({ gameStatus }) => {
  const {
    characterRoomTracker,
    setCharacterRoomTracker,
    successRate,
    setSuccessRate,
    moveAttempts,
    setMoveAttempts,
  } = useStore();

  const moveCharacters = () => {
    setMoveAttempts((prev) => (Number(prev) + 1).toString());
    const characters = data.Characters;
    const rooms = data.Rooms;

    characters.forEach((character, index) => {
      setTimeout(() => {
        if (Math.random() < 0.15) {
          // 15% chance to move to another room
          let newRoom;
          do {
            newRoom = rooms[Math.floor(Math.random() * rooms.length)];
          } while (newRoom.name === characterRoomTracker[character.name]);

          setCharacterRoomTracker((prev) => ({
            ...prev,
            [character.name]: newRoom.name,
          }));

          setSuccessRate((prev) => (Number(prev) + 1).toString());
        }
      }, index * 1700);
    });
  };

  useEffect(() => {
    console.log('moving char effected mounted');
    if (gameStatus === 'active') {
      // Run the moveCharacters function every 30 seconds
      const intervalId = setInterval(moveCharacters, 1000);

      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [gameStatus]);

  return (
    <div className='MCContainer'>
      <div className='title'>Character Room Tracker</div>
      <div className='ListSection'>
        <ul className='list'>
          {Object.entries(characterRoomTracker).map(([characterName, roomName]) => (
            <li key={characterName} className='Item'>
              {characterName} is in {roomName}
            </li>
          ))}
        </ul>
      </div>
      <div className='title'>Total Successful Moves</div>
      <p>{successRate}</p>
      <div className='title'>Move Attempts</div>
      <p>{moveAttempts}</p>
    </div>
  );
};

export default CharacterMover;
