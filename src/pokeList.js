import React, { Component } from "react";
import request from 'superagent';
import PokeItem from './pokeItem';
//import PokeData from './data';

export default class PokeList extends Component {

    render() {
        const pokemonAPIData = this.props.pokemonData;
        const mappedCards = pokemonAPIData.map((object, index) => {
           return <PokeItem pokemonCard = {object} key={index}/>
        })
        
        
        return (
          <section>
    <div>{mappedCards}</div>
</section>
)
}

}



    