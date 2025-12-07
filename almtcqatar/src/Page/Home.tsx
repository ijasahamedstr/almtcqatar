import About from "./About";
import Clients from "./Clients";
import Expertise from "./Expertise";
import GalleryPage from "./Gallery";
import ProjectsSlider from "./Project";


const Home: React.FC = () => {
  return (
    <>
    <About/>
    <Expertise/>
    <Clients/>
    <ProjectsSlider/>
    <GalleryPage/>
    </>
  );
};

export default Home;
