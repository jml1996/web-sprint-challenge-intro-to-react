import React, { useState, useEffect } from 'react'
import styled from "styled-components";

export default function CharacterDetails(props) {
    const { peopleData, index } = props;
    const characterToBeExpanded = peopleData[index];
    return (
        <div>
            <ul>
                <li>Birth Year: {characterToBeExpanded.birth_year}</li>
            </ul>
        </div>
    )
}