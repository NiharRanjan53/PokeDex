import React from "react";
import "./Pokemon.css";
import { Link } from "react-router-dom";
const Pokemon = ({ id, name, url }) => {
  return (
    <Link to={`pokemon/${id}`} className="pokemon-wrapper">
      <div className="pokemon">
        <div className="pokemon-name">{name}</div>
        <div>
          <img className="pokemon-mage" src={url} />
        </div>
      </div>
    </Link>
  );
};

export default Pokemon;
