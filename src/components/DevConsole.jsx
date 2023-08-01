import { useState, useEffect } from "react"
import "./styles/DevConsole.css"
import useStore from "./store"

const DevConsole = ({ actions }) => {
  const [password, setPassword] = useState("")
  const [showConsole, setShowConsole] = useState(false)
  const [stateChanges, setStateChanges] = useState([])

  const gameStatus = useStore((state) => state.gameStatus)

  useEffect(() => {
    const unsubscribe = useStore.subscribe((state, prevState) => {
      // Find the keys of the state values that have changed
      const changedKeys = Object.keys(state).filter(
        (key) => state[key] !== prevState[key]
      )
      // Add the changed state values to the stateChanges array
      setStateChanges((stateChanges) => [
        ...stateChanges,
        ...changedKeys.map((key) => ({ key, value: state[key] })),
      ])
    })
    return () => unsubscribe()
  }, [])

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    if (event.target.value === "DevCo.Console") {
      setShowConsole(true)
    }
  }

  const handleClose = () => {
    setShowConsole(false)
    setPassword("")
  }

  return (
    <div className="ConsoleContainer">
      {!showConsole && (
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      )}
      {showConsole && (
        <div className="Console">
          <button className="CloseBtn" onClick={handleClose}>
            X
          </button>
          <div className="Consolelog">
            <ul>
              {stateChanges.map((change, index) => (
                <li key={index}>
                  {change.key}: {JSON.stringify(change.value)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default DevConsole
