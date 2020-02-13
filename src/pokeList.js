import React, { Component } from "react";
//import request from 'superagent';
import PokeItem from './pokeItem';
import PokeData from './data';

export default class PokeList extends Component {
    render() {
        const mappedCards = PokeData.map(card => 
       <PokeItem pokemonCard = {card}/>)

return (
<section>
    <div>{mappedCards}</div>
</section>
)

}
}


    