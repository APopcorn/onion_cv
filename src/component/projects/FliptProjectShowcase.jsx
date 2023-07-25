import React from "react";

const FliptProjectShowcase = ({ projectTitle, img }) => {
    return (
        <div className="
            rounded-[2rem] 
            text-hero-text 
            h-[50rem] 
            w-[75%] 
            m-8
                        
            bg-gradient-to-b 
            from-project-fade-t 
            to-project-fade-b

            grid 
            gap-4 
            grid-cols-5
            grid-rows-2 
            "
        >   
            <div className="
                col-start-4	col-end-6
                row-start-1	row-end-3
                m-10
            ">
                <h1 className="text-[3rem]">{projectTitle}</h1>
                <div>text</div>
            </div>
            <div className="
                bg-white
                rounded-[2rem]
                col-start-1	col-end-4
                row-start-1	row-end-3
                m-10
                ">
                <img src={img} alt="Garlic" />
            </div>
            
        </div>
    );
};

export default FliptProjectShowcase;
