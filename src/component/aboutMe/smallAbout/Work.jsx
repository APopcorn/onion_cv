const Work = () => {
    return (
        <div
        className="
            col-start-1	col-end-3
            row-start-1	row-end-3
            rounded-[1.5rem]            
            bg-gradient-to-b 
            from-fade-t 
            to-fade-b
            text-hero-text 
            p-10
            "
        >
            <div className="
                grid 
                grid-cols-5
                grid-rows-4
                h-[90%]
                items-center
            ">
                <h1 className="
                    text-[3rem]
                    col-start-3	col-end-4
                    row-start-1	row-end-2
                    ">
                    Work
                </h1>
                <>
                    <img className="col-start-1	col-end-2 row-start-2 row-end-3" src="src\assets\svg\aboutMe\companys\Axis.svg" alt="axis" />
                    <div className="text-[1.25rem] pl-5 col-start-2 col-end-6 row-start-2 row-end-3">
                        Axis PTZ-fw <br />
                        Part-time worker <br />
                        2022 - now  justify-items: center;<br />

                        Working in the student task fores doing varies task 
                    </div>
                </>
                <>
                    <img className="col-start-1	col-end-2 row-start-3 row-end-4" src="src\assets\svg\aboutMe\companys\MylocConstruction.svg" alt="myloc-construction" />
                    <div className="text-[1.25rem] pl-5 col-start-2 col-end-6 row-start-3 row-end-4">
                        Myloc constructions <br />
                        Sommer worker <br />
                        2021 - 2022 <br />

                        Working as front-end developer using React and typescript and server-preference tester usning ... .  
                    </div>
                </>
                <>
                    <img className="col-start-1	col-end-2 row-start-4 row-end-5" src="src\assets\svg\aboutMe\companys\Kjell.svg" alt="kjell&company" />
                    <div className="text-[1.25rem] pl-5 col-start-2 col-end-6 row-start-4 row-end-5">
                        Kjell & Company <br />
                        Worker <br />
                        2020 - 2021
                    </div>
                </>
            </div>
        </div>
    );
};

export default Work;
