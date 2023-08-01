import { useState } from "react"
import "./Overlay.css"
import Game from "./Game"
import Notepad from "./Notepad"

export default function Overlay() {
  const [showDialog, setShowDialog] = useState(false)
  const [showActionMenu, setShowActionMenu] = useState(false)
  const [showNotepad, setShowNotepad] = useState(false)
  const [showRooms, setShowRooms] = useState(false)
  const [toggleNPColor, setToggleNPColor] = useState("Open")
  const [toggleRColor, setToggleRColor] = useState("Open")

  const ToggleRoomBtn = () => {
    if (toggleRColor === "Open") {
      setToggleRColor("Close")
    } else {
      setToggleRColor("Open")
    }
  }

  const ToggleNoteBtn = () => {
    if (toggleNPColor === "Open") {
      setToggleNPColor("Close")
    } else {
      setToggleNPColor("Open")
    }
  }

  const ToggleActionMenu = () => {
    setShowActionMenu(!showActionMenu)
  }

  const ToggleNotepad = () => {
    if (showRooms === true) {
      setShowRooms(false)
      ToggleRoomBtn()
      console.log(`Rooms is now ${toggleRColor}`)
    }
    setShowNotepad(!showNotepad)
    setShowActionMenu(false)
    ToggleNoteBtn()
  }

  const ToggleRooms = () => {
    if (showNotepad === true) {
      setShowNotepad(false)
      ToggleNoteBtn()
      console.log(`Notepad is now ${toggleNPColor}`)
    }
    setShowRooms(!showRooms)
    setShowActionMenu(!showActionMenu)
    ToggleRoomBtn()
  }

  const ToggleDialog = () => {}

  return (
    <div className="Overlay">
      <div className="POV">
        <Game />
        <Notepad show={showNotepad} />
      </div>

      {showActionMenu ? (
        <div className="ActionMenu">
          <div
            className={`ActionItems ${toggleNPColor}`}
            onClick={ToggleNotepad}
          >
            {showNotepad ? <div>Close Note</div> : <div>Notepad</div>}
          </div>
          <div className={`ActionItems ${toggleRColor}`} onClick={ToggleRooms}>
            {showRooms ? <div>Close Room</div> : <div>Rooms</div>}
          </div>
          <div className="ActionItems Open">Interview</div>
          <div className="ActionItems Open">Accuse</div>
          <div className="ActionItems Close" onClick={ToggleActionMenu}>
            Close
          </div>
        </div>
      ) : (
        <div className="ActionBtn" onClick={ToggleActionMenu}>
          ☰
        </div>
      )}

      {showDialog ? <div className="TextBox">Suspect Dialog</div> : null}
    </div>
  )
}
