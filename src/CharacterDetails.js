import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import axios from "axios";
// I believe this would count as the first stretch goal:
// "Make the Character component more complex and break it into several subcomponents."

export default function CharacterDetails(props) {
    const { peopleData, index, closeDetails } = props;
    const characterToBeExpanded = peopleData[index];
    const homeWorldDataApi = characterToBeExpanded.homeworld;
    const homeWorldDataApiAsHttps = "https" + homeWorldDataApi.slice(4);

    // const [homeWorldDataApi, setHomeWorldDataApi] = useState(null);

    const [homeWorldData, setHomeWorldData] = useState(null);

    useEffect(() => {
        const fetchHomeWorldData = () => {
          axios
          .get(`${homeWorldDataApiAsHttps}`)
          .then((res) => {
            console.log(res.data);
            setHomeWorldData(res.data.name);
          })
          .catch((err) => {})
        }
        fetchHomeWorldData();
      }, [homeWorldDataApiAsHttps]);

    return (
        <StyledCharacterDetails>
            <ul>
                <h6 key="1">Birth Year: {characterToBeExpanded.birth_year}</h6>
                <h6 key="3">Eye Color: {characterToBeExpanded.eye_color}</h6>
                <h6 key="4">Height: {characterToBeExpanded.height}</h6>
                <h6 key="5">Mass: {characterToBeExpanded.mass}</h6>
                <h6 key="6">Homeworld: {homeWorldData}</h6>
                <button key="7" onClick={()=> closeDetails(index)}>Close</button>
            </ul>
        </StyledCharacterDetails>
    )
}

const StyledCharacterDetails = styled.div`
    text-align: left;
    border: 2px solid gray;
`