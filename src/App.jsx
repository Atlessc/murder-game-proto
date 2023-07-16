import { useState } from 'react'
import './App.css'
import WelcomePopup from './component/WelcomePopUp'
import Overlay from './component/Overlay';

function App() {

  const [showPopUp, setShowPopUp] = useState(true);

  const TogglePopup = () => {
    setShowPopUp(!showPopUp)
  }

  return (
      <div className='AppContainer'>
        {
          showPopUp ?
          <div className='popupParent'>
            <div className='popup' >
              <WelcomePopup />
              <div className='startBtn' onClick={TogglePopup}>start</div>
            </div>
          </div>
          : null
        }
        <div className='App'>
            <div className='MenuBtn' onClick={TogglePopup}>
              <svg width="24" height="24">
                <rect x="4" y="4" width="6" height="20"/>
                <rect x="14" y="4" width="6" height="20"/>
              </svg>
            </div>
          <Overlay />
        </div>

      </div>
  )
};

export default App
