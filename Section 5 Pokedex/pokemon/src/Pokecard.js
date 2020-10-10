import React, {Component} from 'react';
import './Pokecard.css';
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
  render() {
    const {id, name, type, exp} = this.props;
    let imgSRC = `${POKE_API}${id}.png`;

    return (
      <div className="Pokecard">
        <h1>{name}</h1>
        <img src={imgSRC} alt={name}/>
        <div>Type: {type}</div>
        <div>EXP: {exp}</div>
      </div>
    )
  }
}

export default Pokecard;