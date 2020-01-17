import React from "react";



const PlayerCard = props => {
  console.log(`this is props in PlayerCard`, props);
  return (
    <div>
      <h1>Women's World Cup players ranked by search interest</h1>
      {props.data.players.map(player => (
        <div>
          <h2>{player.name}</h2>
          <p>{player.country}</p>
          <p>{player.searches}</p>
        </div>
      ))}
    </div>
  );
};

export default PlayerCard;