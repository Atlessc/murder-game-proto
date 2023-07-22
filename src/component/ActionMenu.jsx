// ActionMenu.jsx
import React from 'react';
import useStore from './store';
import './Overlay.css'

const ActionMenu = () => {
  const actionMenu = useStore(state => state.actionMenu);
  const toggleActionMenu = useStore(state => state.toggleActionMenu);
  const showNotepad = useStore(state => state.showNotepad);
  const toggleNotepad = useStore(state => state.toggleNotepad);
  const showRooms = useStore(state => state.showRooms);
  const toggleRooms = useStore(state => state.toggleRooms);
  const notepadBtn = useStore(state => state.notepadBtn);

  const ToggleNotepad = () => {
    toggleNotepad('Open');
    toggleActionMenu('Close');
  };

  if (actionMenu === false) {
    return (
    <>
    <div className="ActionBtn" onClick={toggleActionMenu}>
    ☰
  </div>
  </>
  );
  } else {

  return (
    <>
        <div className="ActionMenu">
          <div className={`ActionItems ${showNotepad ? 'Close' : 'Open'}`} onClick={ToggleNotepad}>
            {showNotepad ? <div>Close Note</div> : <div>Notepad</div>}
          </div>
          <div className={`ActionItems ${showRooms ? 'Close' : 'Open'}`} onClick={toggleRooms}>
            {showRooms ? <div>Close Room</div> : <div>Rooms</div>}
          </div>
          <div className="ActionItems Open">Interview</div>
          <div className="ActionItems Open">Accuse</div>
          <div className="ActionItems Close" onClick={toggleActionMenu}>
            Close
          </div>
        </div>
    </>
  );
};
};

export default ActionMenu;
