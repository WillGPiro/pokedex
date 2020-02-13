import React, { Component } from 'react';
import './App.css';
import PokeList from './pokeList';
import request from 'superagent';

export default class App extends Component {
  state = {selected: null,
  pokemonItemData: []};

  async componentDidMount() {
  const pokemonJsonData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
  console.log(pokemonJsonData)
  this.setState({ pokemonItemData: pokemonJsonData.body.results });
  }

  render() {


      return (
         < PokeList pokemonData = {this.state.pokemonItemData}/>
      );
    }
  }

    
  
 


