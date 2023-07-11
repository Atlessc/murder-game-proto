import React, {useState} from "react";
import './Game.css'

export default function GameContainer() {

    const [showDialog, setShowDialog] = useState(false)

    return (
        <div className="GameConatiner">
            <div className="POV">Visuals</div>
            <div className="NotePad">Notepad</div>
            {showDialog ? null:
            <div className="TextBox">Suspect Dialog</div>}
        </div>
    )
}