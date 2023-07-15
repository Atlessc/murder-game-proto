import React, {useState} from "react";
import './Overlay.css'

export default function GameContainer() {

    const [showDialog, setShowDialog] = useState(false)
    const [showActionMenu, setShowActionMenu] = useState(false)

    const ToggleActionMenu = () => {
        setShowActionMenu(!showActionMenu)
    }

    return (
        <div className="GameConatiner">
            <div className="POV"><Game /></div>

            {showActionMenu ?
            <div className="ActionMenu">
                <div className="ActionItems">Notes</div>
                <div className="ActionItems">Rooms</div>
                <div className="ActionItems">Talk</div>
                <div className="ActionItems">Accuse</div>
                <div className="ActionItems" onClick={ToggleActionMenu}>Close</div>
            </div>
            :
            <div className="ActionBtn" onClick={ToggleActionMenu}>☰</div>}
            {showDialog ? null:
            <div className="TextBox">Suspect Dialog</div>}
        </div>
    )
}