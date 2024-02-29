import React, { useState } from "react";
import TabButton from "./tabButton";
import { EXAMPLES } from "./tabButton";


export default function Example(){
    const [selectTopic, setSelectTopic] = useState("");

    function handleClickButton(selectButton){
        setSelectTopic(selectButton);
    }

    let tabcontent = <p>select the above button</p>

    if(selectTopic){
        tabcontent =(<div id="core-concepts">
        <h2>{EXAMPLES[selectTopic].title}</h2>,
        <p>{EXAMPLES[selectTopic].description}</p>,
        <pre>
            <code>
            {EXAMPLES[selectTopic].code}
            </code>
        </pre>
        </div>)
    }
    return(
        <section id="core-concepts">
            <menu>
                <TabButton onSelect={()=>handleClickButton('java')}>Java</TabButton>
                <TabButton onSelect={()=>handleClickButton('python')}>Python</TabButton>
                <TabButton onSelect={()=>handleClickButton('react')}>React</TabButton>
            </menu>
            {tabcontent}
        </section>
    )
}
