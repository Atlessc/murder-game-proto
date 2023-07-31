import React from "react"
import useStore from "./store"
import "./styles/RoomChangeMenu.css"
import data from "../data/GameItems.json"

export default function RoomChanger() {
  const { playerRoom, setPlayerRoom, setRoomMenu } = useStore()
  const handleNewRoomSelection = (roomName) => {
    setPlayerRoom(roomName)
    setRoomMenu(false)
  }

  const rooms = data.Rooms

  return (
    <div className="ChangeRoomMenu">
      <h3>Choose a room to move to:</h3>
      <div className="RoomList">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="RoomItem"
            onClick={() => handleNewRoomSelection(room.name)}
            disabled={room.name === playerRoom}
          >
            {room.name}
          </div>
        ))}
      </div>
    </div>
  )
}
