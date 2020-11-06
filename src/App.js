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

  const closeDetails = (index) => {
    setCurrentCharacterIndex(null)
  }

  return (

    <StyledApp>
      <Title>
        <h1>
          Characters
        </h1>
      </Title>
      {
        peopleData.map((character, index) => {
          return (
            [<StyledCharacterBar key={index} index2={currentCharacterIndex}><Character character={character} index={index} showDetails={showDetails} /></StyledCharacterBar>,
            (currentCharacterIndex === index) && <CharacterDetails peopleData={peopleData} index={currentCharacterIndex} closeDetails={closeDetails} />]
          );
        })
      }
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
    width: 70%;
    justify-content: center;
    text-align: center;
    margin: auto;
    margin-top: 10%
    border: dotted;
    background: './images/sw-bg.jpg';
    color: white;
`
const Title = styled.h1`
  text-align: left;
  font-size: x-large;
  color: white;
`

// const Character = styled.div`
//   background-color: cyan;
// `

const StyledCharacterBar = styled.div`
  // I was trying to get this to highlight only the name of the character 
  // for which key === index2 (i.e., the selected character), but the key prop
  // keeps registering as undefined here in StyledCharacterBar even when it has
  // the correct value in the people.Data map function above (i.e., as "index")
  background-color: ${pr => (pr.index2) ? pr.theme.highLightBackground : pr.theme.normalBackground};
  border: dotted;
  margin-top: 8%;
  margin-bottom: 8%;
  border: 1px;
  color: white;
`