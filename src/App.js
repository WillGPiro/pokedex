import React, { Component } from 'react';
import './App.css';
import PokeList from './pokeList';
import request from 'superagent';
import Search from './SearchOptions'
import {getPokemon} from './pokemon-api';
import Explore from './Explore';

export default class App extends Component {
  state = {selected: null,
  pokemonItemData: []};

  async loadPokedex(){
    const infoResponse = await getPokemon();
    const pokemonItemData = infoResponse.results;
    const pokeCount = infoResponse.count;
    this.setState({pokemonItemData, pokeCount })

  }

  async componentDidMount() {
  const pokemonJsonData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
  console.log(pokemonJsonData)
  this.setState({ pokemonItemData: pokemonJsonData.body.results });
  window.addEventListener("hashchange", async () => {
    await this.loadPokedex();
  });
}

  //  this.setState({you need to set global variables })
  render() {

      return (
      <div>
        <div className = "card-page">
         < PokeList pokemonData = {this.state.pokemonItemData}/>
         < Search />
         <Explore />
        </div>
      </div>
      );
    }
  }

    
  
 


