import React from "react";
import javaImage from './java.jpg'
import pythonImage from './python.jpg'
import reactImage from './react.jpg'

export default function CoreConcepts({image,title,description}){
    return(
        <>
        <li>
            <img src={image} alt="Images"/>
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
        </>
    )
}

export const AllDoc = [
    {
        image: javaImage,
        title: 'Java',
        description: 'Java is a high level pragramming language',
    },
    {
        image: pythonImage,
        title: 'Python',
        description: 'Python is a object oriented pragramming language, easy to write code',
    },
    {
        image: reactImage,
        title: 'Java',
        description: 'Java is a high level pragramming language',
    }
]