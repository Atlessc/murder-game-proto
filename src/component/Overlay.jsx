import React, {useState} from "react";
import './Overlay.css'
import Game from "./Game";


export default function Overlay() {

    const [showDialog, setShowDialog] = useState(false)
    const [showActionMenu, setShowActionMenu] = useState(false)

    const ToggleActionMenu = () => {
        setShowActionMenu(!showActionMenu)
    }


    return (
        <div className="Overlay">
            <div className="POV"><Game /></div>

            {showActionMenu ?
            <div className="ActionMenu">
                <div className="ActionItems">Notes</div>
                <div className="ActionItems">Rooms</div>
                <div className="ActionItems">Interview</div>
                <div className="ActionItems">Accuse</div>
                <div className="ActionItems Close" onClick={ToggleActionMenu}>Close</div>
            </div>
            :
            <div className="ActionBtn" onClick={ToggleActionMenu}>☰</div>}

            {showDialog ?
            <div className="TextBox">Suspect Dialog</div>
            :
            null}
        </div>
    )
}