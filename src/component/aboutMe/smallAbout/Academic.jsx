import React from "react";

const Academic = () => {
    return (
        <div
            className="
                col-start-3	col-end-4
                row-start-2	row-end-3
                rounded-[1.5rem]            
                bg-gradient-to-b 
                from-fade-t 
                to-fade-b
                text-hero-text
                p-10
            "
        >
            <h1 className="text-[2rem]">Academic</h1>
            <div className="flex gap-4 mb-4 mt-4">
                <img
                    className="w-[7rem]"
                    src="src\assets\svg\aboutMe\academic\Lund.svg"
                    alt="Lund"
                />
                <div>
                    Academic Faculty of Engineering (LTH), Lund University
                    studying Computer science
                    <br />
                    2021 - present
                </div>
            </div>
            <div className="flex gap-4">
                <img
                    className="w-[7rem]"
                    src="src\assets\svg\aboutMe\academic\Cyber.svg"
                    alt="Cyber"
                />
                <div>
                    Cybergymnasiet <br />
                    Natural Science Programme <br />
                    2017 - 2020
                </div>
            </div>
        </div>
    );
};

export default Academic;
