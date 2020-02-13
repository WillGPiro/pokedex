import React, { Component } from "react"

export default class PokeItem extends Component {
    render() {
        const pokemonCard = this.props.pokemonCard
        return (
            <article clasName ="pokemonCard-item" >
                <header> 
                    <h1>{pokemonCard.pokemon}</h1>
                    <span>{pokemonCard.hp}</span>
                </header>
                <div className = "pokemonCard-img">
                    <img src={pokemonCard.url_image} alt={pokemonCard.pokemon}></img>
                </div>
                    <p>{pokemonCard.height}</p>
                    <p>{pokemonCard.description}</p>
                    <p>{pokemonCard.keyword}</p>
                    <p>{pokemonCard.horns}</p>
            </article>
           

        )
    }

}   
