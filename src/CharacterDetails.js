import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import axios from "axios";


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
                <h6>Birth Year: {characterToBeExpanded.birth_year}</h6>
                <h6>Eye Color: {characterToBeExpanded.eye_color}</h6>
                <h6>Height: {characterToBeExpanded.height}</h6>
                <h6>Mass: {characterToBeExpanded.mass}</h6>
                <h6>Homeworld: {homeWorldData}</h6>
                <button onClick={()=> closeDetails(index)}>Close</button>
            </ul>
        </StyledCharacterDetails>
    )
}

const StyledCharacterDetails = styled.div`
    text-align: left;
    border: 2px solid gray;
`