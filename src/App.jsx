import "./App.css";
import NavBar from "./component/navbar/NavBar";
import HomeContainer from "./component/home/HomeContainer";
import Projects from "./component/projects/Projects";
import AboutMe from "./component/aboutMe/AboutMe";

function App() {
    return (
        <div className="flex flex-col bg-white">
            <NavBar />
            <HomeContainer />
            <AboutMe />
            <Projects />
        </div>
    );
}

export default App;
