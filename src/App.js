// import React from 'react';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./App.css";
import Character from "./components/Character";
import CharacterDetails from "./CharacterDetails";

import styled from "styled-components";
import { BASE_URL, API_KEY } from './constants';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [peopleData, setPeopleData] = useState([]);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(null);

  useEffect(() => {
    const fetchStarWarsData = () => {
      axios
      .get(`https://swapi.dev/api/people/`)
      .then((res) => {
        console.log(res.data.results);
        setPeopleData(res.data.results);
      })
      .catch((err) => {})
    }
    fetchStarWarsData();
  }, []);

//       <h1 className="Header">Characters</h1>

  const showDetails = (index) => {
    setCurrentCharacterIndex(index);
  }

  return (

    <div className="App">
      {
        peopleData.map((character, index) => {
          console.log(character);
          console.log(showDetails);
          return (
            [<Character character={character} index={index} showDetails={showDetails} />,
            (currentCharacterIndex === index) && <CharacterDetails peopleData={peopleData} index={currentCharacterIndex} />]
          );
        })
      }
    </div>
  );
}

export default App;

