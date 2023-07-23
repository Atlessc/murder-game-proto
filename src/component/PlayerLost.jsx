import React, { useEffect } from 'react';
import useStore from './store';


export default function PlayerLost() {
    const gameStatus = useStore(state => state.gameStatus);

    useEffect (() => {
        if (gameStatus === "Lost") {
        console.log("PlayerLost.jsx mounted")
        return (
                <dialog>
                    <h1>Game Over</h1>
                </dialog>
            )
        }
    }, [gameStatus])
}