import React from "react";
import PlayerCard from "./PlayerCard";

const PlayerList = props => {
  console.log(`this is props in PlayerList`, props);
  return (
    <div>
        <PlayerCard  data={props} />
    </div>
      
    
  );
};
export default PlayerList;