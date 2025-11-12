import About from "./About";
import Guidance from "./Guidance";
import Slider from "./Slider";
import Testimonials from "./Testimonials";

const Home: React.FC = () => {
  return (
    <>
    <Slider/>
    <About/>
    <Testimonials/>
    <Guidance/>
    </>
  );
};

export default Home;
