import React from "react";

const ProjectShowcase = () => {
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
            grid-cols-2
            grid-rows-2 
            "
        >
            <div>ProjectShowcase</div>
            <div className="
                bg-hero-orange
                w-[55rem]
                h-[40rem]
                rounded-[2rem] 
                ">
                img
            </div>
                <div>text</div>
        </div>
    );
};

export default ProjectShowcase;
