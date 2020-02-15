import React, { Component } from "react"

export default class PokeItem extends Component {
    render() {
        //const pokemonCard = this.props.pokemonCard
        return (
            <article className ="pokemonCard-item" >
                <header> 
                    <h1>{this.props.pokemonCard.pokemon}</h1>
                    <span>{this.props.pokemonCard.hp}</span>
                </header>
                <div className = "pokemonCard-img">
                    <img src={this.props.pokemonCard.url_image} alt={this.props.pokemonCard.pokemon}></img>
                </div>
                    <p>{this.props.pokemonCard.height}Height</p>
                    <p>{this.props.pokemonCard.description}Description</p>
                    <p>{this.props.pokemonCard.weight}Weight</p>
                    <p>{this.props.pokemonCard.hp}HP</p>
            </article>
           

        )
    }

}   
