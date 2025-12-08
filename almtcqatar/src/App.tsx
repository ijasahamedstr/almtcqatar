import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from "./Page/Topbar";
import Navbar from './Page/Navbar';
import Footer from './Page/Footer';
import Home from './Page/Home';
import Aboutus from './Page/About Us';
import Contactus from './Page/contact-us';
import Projects from './Page/Projects';
import ExpertiseDetails from './Page/ExpertiseView';
import ExpertiseAll from './Page/ExpertiseAll';
import ProjectView from './Page/ProjectView';



function App() {
  return (
    <Router>
      <Topbar />
      <Navbar/>     
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/Portfolio" element={< Aboutus/>} />
        <Route path="/contact-us" element={< Contactus/>} />
        <Route path="/project" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectView />} />
        <Route path="/Expertise/:slug" element={<ExpertiseDetails />} />
        <Route path="/Expertise" element={<ExpertiseAll/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
