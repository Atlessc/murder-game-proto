import { useEffect, useState } from "react"
import "./App.css"
import WelcomePopup from "./components/WelcomePopUp"
import Game from "./components/Game"
import useStore from "./components/store"
import HowTo from "./components/HowTo"
import Img1 from "./assets/pause.png"
import Img2 from "./assets/play.png"
// import { pauseMoveTimeout, resumeMoveTimeout } from './utilities/gameMechanics';

function App() {
  const [showPopUp, setShowPopUp] = useState(true)
  const [showHowTo, setShowHowTo] = useState(false)
  const setGameStatus = useStore((state) => state.setGameStatus)

  const GameStatus = useStore((state) => state.gameStatus)

  const ToggleGameStatus = () => {
    if (useStore.getState().gameStatus === "Active") {
      useStore.setState({ gameStatus: "Paused" })
      // pauseMoveTimeout()
      console.log(`${GameStatus}`)
    } else if (useStore.getState().gameStatus === "Paused") {
      useStore.setState({ gameStatus: "Active" })
      // resumeMoveTimeout()
      console.log(`${GameStatus}`)
    }
  }

  useEffect(() => {
    setGameStatus(useStore.getState().gameStatus)
    console.log(useStore.getState().gameStatus)
  })

  const TogglePopup = () => {
    setShowPopUp(!showPopUp)
  }

  const ToggleHowTo = () => {
    setShowHowTo(!showHowTo)
  }

  return (
    <div className="AppContainer">
      {showPopUp ? (
        <div className="popupParent">
          <div className="popup">
            {showHowTo ? (
              <>
                <HowTo />
                <div className="btnCon">
                  <div className="CloseButton" onClick={ToggleHowTo}>
                    Back
                  </div>
                </div>
              </>
            ) : (
              <>
                <WelcomePopup />
                <div className="btnCon">
                  <div className="CloseButton" onClick={TogglePopup}>
                    Close
                  </div>
                  <div className="HowToBtn" onClick={ToggleHowTo}>
                    How-To
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}
      <div className="App">
        <div className="MenuBtn" onClick={ToggleGameStatus}>
          {GameStatus === "Active" ? (
            <div className="play">
              <img src={Img1} alt="pause" height={25} width={25} />
            </div>
          ) : GameStatus === "Pre-Game" || GameStatus === "Paused" ? (
            <div className="play">
              <img src={Img2} alt="play" width={25} height={25} />
            </div>
          ) : (
            <p>Err</p>
          )}
        </div>
        <Game />
      </div>
    </div>
  )
}

export default App
