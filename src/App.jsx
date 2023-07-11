import { useState } from 'react'
import './App.css'
import WelcomePopup from './component/WelcomePopUp'
import GameContainer from './component/Game';

function App() {

  const [showPopUp, setShowPopUp] = useState(true);

  const TogglePopup = () => {
    setShowPopUp(!showPopUp)
  }

  return (
      <div>
        
        {
          showPopUp ?
            <div className='popup' >
              <WelcomePopup />
              <div className='startBtn' onClick={TogglePopup}>start</div>
            </div>
          : null
        }
        <div className='App'>
          <div className='header'>
            <h1 className='title'>The Halls Whisper MURDER!</h1>
            <div className='MenuBtn' onClick={TogglePopup}>☰</div>
          </div>
          <GameContainer />
        </div>

      </div>
  )
};

export default App
