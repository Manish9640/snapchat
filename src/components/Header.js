import React from 'react'
import CoreConcepts, { AllDoc } from './coreConcepts';
import TabButton from './tabButton';


export const randomName = ['fundamental', 'crucial', 'core'];

function ChangeName(max){
    return Math.floor(Math.random()*(max+1));
} 

export default function Header(){
    return(
        <>
        <h1>SnapChat</h1>
        <p>What is Snapchat? Snapchat is a {randomName[ChangeName(2)]} messaging app that lets users exchange pictures and videos, 
            called snaps, that are meant to disappear after they're viewed.
        </p>
        <section id='core-concepts'>
            <ul>
                <CoreConcepts {...AllDoc[0]}/>
                <CoreConcepts {...AllDoc[1]}/>
                <CoreConcepts {...AllDoc[2]}/>
            </ul>   
        </section>
        </>
    )
}