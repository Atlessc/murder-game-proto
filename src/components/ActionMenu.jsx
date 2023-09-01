// ActionMenu.jsx
import useStore from "./store"
import "./styles/Overlay.css"

const ActionMenu = () => {
  const actionMenu = useStore((state) => state.actionMenu)
  const toggleActionMenu = useStore((state) => state.toggleActionMenu)
  const showNotepad = useStore((state) => state.showNotepad)
  const toggleNotepad = useStore((state) => state.toggleNotepad)
  const roomMenu = useStore((state) => state.roomMenu)
  const setRoomMenu = useStore((state) => state.setRoomMenu)
  const notepadBtn = useStore((state) => state.notepadBtn)

  const ToggleNotepad = () => {
    toggleNotepad(!showNotepad)
    toggleActionMenu(false)
    setRoomMenu(false)
  }

  const ToggleRoom = () => {
    setRoomMenu(!roomMenu)
    toggleActionMenu(false)
    toggleNotepad(false)
  }

  if (actionMenu === false) {
    return (
      <>
        <div className="ActionBtn" onClick={toggleActionMenu}>
          <div className="ActionBtnIcon">☰</div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="ActionMenu">
          <div className={`ActionItems Open`} onClick={ToggleNotepad}>
            {showNotepad ? <div>Close Note</div> : <div>Notepad</div>}
          </div>
          <div className={`ActionItems Open`} onClick={ToggleRoom}>
            {roomMenu ? <div>Close Rm</div> : <div>Rooms</div>}
          </div>
          <div className="ActionItems Open">Interview</div>
          <div className="ActionItems Open">Accuse</div>
          <div className="ActionItems Close" onClick={toggleActionMenu}>
            Close
          </div>
        </div>
      </>
    )
  }
}

export default ActionMenu
