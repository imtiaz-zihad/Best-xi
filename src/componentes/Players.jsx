import { useEffect } from "react";
import { useState } from "react";
import Player from "./Player";
import "./Container.css";


const Players = ({handleChoosePlayer}) => {
   
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("playerdetails.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="  ">
     

     
      <div className="grid grid-cols-3 gap-5 text-black">
        {players.map((player) => (
          <Player key={player.id} handleChoosePlayer={handleChoosePlayer}  player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
