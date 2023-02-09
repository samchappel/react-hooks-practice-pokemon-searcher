import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( { 
  name,
  hp,
  sprites
 }) {

  const [ frontSprite, setFrontSprite ] = useState(true)

  function toggleSprite() {
    setFrontSprite((currentState) => !currentState)
  }
  return (
    <Card>
      <div>
        <div className="image">
          {frontSprite ? (
          <img onClick={toggleSprite} src={sprites.front} alt={name} />
          ) : (
            <img onClick={toggleSprite} src={sprites.back} alt={name} />
          )}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
