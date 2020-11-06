// Write your Character component here

import React, { useState, useEffect } from 'react'
import styled from "styled-components";

export default function Character(props) {
    const { character, index, showDetails } = props;

    return (
        <div>
            <h2 onClick={()=> showDetails(index)}>{character.name}</h2>
        </div>
    )
}