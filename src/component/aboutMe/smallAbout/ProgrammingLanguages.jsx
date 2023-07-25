import React from "react";

const ProgrammingLanguages = () => {
    return (
        <div
            className="
            col-start-3	col-end-4
            row-start-1	row-end-2
            rounded-[1.5rem]            
            bg-gradient-to-b 
            from-fade-t 
            to-fade-b 
            text-hero-text 
            p-10
            "
        >
            <h1 className="text-[2rem]">
                Programming Languages
            </h1>
            <ul>
                <li>Python</li>
                <li>Java</li>
                <li>React</li>
                <li>Lua</li>
                <li>Scala</li>
                <li>R</li>
                <li>VHDL</li>
                <li>Assembly</li>
                <li>JavaScript</li>
                <li>TypeScrip</li>
                <li>Closure</li>
                <li>Haskell</li>
            </ul>
        </div>
    );
};

export default ProgrammingLanguages;
