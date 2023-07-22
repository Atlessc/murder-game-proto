// Notepad.jsx
import React, { useState } from 'react';
import './Notepad.css';

export default function Notepad({ show }) {
  // Define state variables for the player's notes
  const [notes, setNotes] = useState("");
  const [suspects, setSuspects] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [suspectInput, setSuspectInput] = useState("");
  const [roomInput, setRoomInput] = useState("");
  const [weaponInput, setWeaponInput] = useState("");
  const [tab, setTab] = useState("Notes");



  const handleAddSuspect = () => {
    setSuspects([...suspects, suspectInput]);
    setSuspectInput("");
  };

  const handleAddRoom = () => {
    setRooms([...rooms, roomInput]);
    setRoomInput("");
  };

  const handleAddWeapon = () => {
    setWeapons([...weapons, weaponInput]);
    setWeaponInput("");
  };

  const handleDeleteSuspect = (index) => {
    setSuspects(suspects.filter((_, i) => i !== index));
  };

  const handleDeleteRoom = (index) => {
    setRooms(rooms.filter((_, i) => i !== index));
  };

  const handleDeleteWeapon = (index) => {
    setWeapons(weapons.filter((_, i) => i !== index));
  };

  if (show === false) {
    return null;
  } else {

  return (
      <div className='NotepadContainer'>
        <h3 className='Title'>Notepad</h3>
        <div className='NotepadTabs'>
            <div className='NotepadTab' onClick={() => setTab("Notes")}>Notes</div>
            <div className='NotepadTab' onClick={() => setTab("Suspects")}>Suspects</div>
            <div className='NotepadTab' onClick={() => setTab("Rooms")}>Rooms</div>
            <div className='NotepadTab' onClick={() => setTab("Weapons")}>Weapons</div>
        </div>
        <div className='NotepadContent'>
            {
            tab === "Notes" ? (
                <div className='NPList'>
                <h4>Notes</h4>
                <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={10} cols={10} />
                </div>
            ) : tab === "Suspects" ? (
                <div className='NPList'>
                <h4>Suspects</h4>
                <input
                    type="text"
                    value={suspectInput}
                    onChange={e => setSuspectInput(e.target.value)}
                />
                {suspectInput !== "" && <button className='Submit' onClick={handleAddSuspect}>Submit</button>}
                <ul className='listed'>
                    {suspects.map((suspect, index) => (
                        <li className='listItem' key={index} maxLength="10">
                            {suspect}
                            <button className='Del' onClick={() => handleDeleteSuspect(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
                </div>
            ) : tab === "Rooms" ? (
                <div className='NPList'>
                <h4>Rooms</h4>
                <input
                    type="text"
                    value={roomInput}
                    onChange={e => setRoomInput(e.target.value)}
                />
                {roomInput  !== "" && <button className='Submit' onClick={handleAddRoom}>Submit</button>}
                <ul>
                    {rooms.map((room, index) => (
                        <li className='listItem' key={index} maxLength="10">
                            {room}
                            <button className='Del' onClick={() => handleDeleteRoom(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
                </div>
            ) : tab === "Weapons" ? (
                <div className='NPList'>
                <h4>Weapons</h4>
                <input
                    type="text"
                    value={weaponInput}
                    onChange={e => setWeaponInput(e.target.value)}
                />
                {weaponInput && <button className='Submit' onClick={handleAddWeapon}>Submit</button>}
                <ul>
                {weapons.map((weapon, index) => (
                    <li className='listItem' key={index} maxLength="10">
                        {weapon}
                        <button className='Del' onClick={() => handleDeleteWeapon(index)}>Delete</button>
                    </li>
                ))}
                </ul>
                </div>
                ) : null
                }
        </div>
    </div>
  );
}
}
