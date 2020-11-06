// Write your Character component here

import React, { useState, useEffect } from 'react'
import styled from "styled-components";

export default function Character(props) {
    const { character, index, showDetails } = props;
    console.log(showDetails);

    return (
        <StyledCharacterBar>
            <h1 onClick={()=> showDetails(index)}>{character.name}</h1>
        </StyledCharacterBar>
    )
}

const StyledCharacterBar = styled.div`
    border: dotted;
`