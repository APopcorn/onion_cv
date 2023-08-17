const AboutMeBig = () => {
    const year_started = 2020;
    const current_year = 2023;
    return (
        <div
            className="
            bg-gradient-to-b 
            from-fade-t 
            to-fade-b 
            text-hero-text 
            w-[72%] 
            h-[40rem] 
            m-8
            mb-[8rem]

            grid 
            grid-cols-3
            grid-rows-3
            p-[3rem]
            pt-[5rem]
            "
        >
            <p
                className="
                    text-[1.5rem]
                    col-start-1	col-end-3
                    row-start-1	row-end-2
                "
            >
                I'm a {current_year - year_started} year student at the Faculty
                of Engineering (LTH), Lund University studying Computer science.
                I enjoy socializing and working in teams. I am eager to create
                and learn that's why I hope you drop a project ide in the text
                field below if you want.
            </p>

            <form
                className="
                grid 
                gap-4 
                grid-cols-3
                grid-rows-5
                w-[40rem]

                col-start-1	col-end-3
                row-start-2	row-end-4
                "
                action=""
            >
                <textarea
                    placeholder="Write here..."
                    className="
                    p-2 
                    focus:outline-1 
                    focus:outline-blue-500 
                    font-bold border-[0.1px] 
                    resize-none h-[120px] 
                    border-[#9EA5B1] 
                    rounded-[1.5rem]
                    h-[17rem]
                    col-start-1	col-end-4
                    row-start-1	row-end-5"
                ></textarea>
                <input
                    className="
                    col-start-1	col-end-3
                    row-start-5	row-end-6
                    rounded-[1.5rem]
                    "
                    type="email"
                    name=""
                    id=""
                />
                <input
                    className="
                    col-start-3	col-end-4   
                    row-start-5	row-end-6
                    rounded-[1.5rem] bg-white"
                    type="submit"
                    value="Send"
                />
            </form>
        </div>
    );
};

export default AboutMeBig;
