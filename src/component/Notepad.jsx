// Notepad.jsx
import React, { useState } from 'react';
import './Notepad.css';
import useStore from './store';

export default function Notepad() {
  // Access state variables for the player's notes from the store
  const noteNotes = useStore(state => state.noteNotes);
  const noteSuspects = useStore(state => state.noteSuspects);
  const noteRooms = useStore(state => state.noteRooms);
  const noteWeapons = useStore(state => state.noteWeapons);

  // Access state update functions for the player's notes from the store
  const setNoteNotes = useStore(state => state.setNoteNotes);
  const setNoteSuspects = useStore(state => state.setNoteSuspects);
  const setNoteRooms = useStore(state => state.setNoteRooms);
  const setNoteWeapons = useStore(state => state.setNoteWeapons);

  // Define local state variables for the notepad inputs
  const [suspectInput, setSuspectInput] = useState("");
  const [roomInput, setRoomInput] = useState("");
  const [weaponInput, setWeaponInput] = useState("");
  const [tab, setTab] = useState("Notes");

  const handleAddSuspect = () => {
    setNoteSuspects([...noteSuspects, suspectInput]);
    setSuspectInput("");
  };

  const handleAddRoom = () => {
    setNoteRooms([...noteRooms, roomInput]);
    setRoomInput("");
  };

  const handleAddWeapon = () => {
    setNoteWeapons([...noteWeapons, weaponInput]);
    setWeaponInput("");
  };

  const handleDeleteSuspect = (index) => {
    setNoteSuspects(noteSuspects.filter((_, i) => i !== index));
  };

  const handleDeleteRoom = (index) => {
    setNoteRooms(noteRooms.filter((_, i) => i !== index));
  };

  const handleDeleteWeapon = (index) => {
    setNoteWeapons(noteWeapons.filter((_, i) => i !== index));
  };

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
        {tab === "Notes" ? (
          <div className='NPList'>
            <h4>Notes</h4>
            <textarea value={noteNotes} onChange={e => setNoteNotes(e.target.value)} rows={10} cols={10} />
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
              {noteSuspects.map((suspect, index) => (
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
            {roomInput !== "" && <button className='Submit' onClick={handleAddRoom}>Submit</button>}
            <ul>
              {noteRooms.map((room, index) => (
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
              {noteWeapons.map((weapon, index) => (
                <li className='listItem' key={index} maxLength="10">
                  {weapon}
                  <button className='Del' onClick={() => handleDeleteWeapon(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
