import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from "./Page/Topbar";
import Navbar from './Page/Navbar';
import Footer from './Page/Footer';
import Home from './Page/Home';
import Aboutus from './Page/About Us';
import Contactus from './Page/contact-us';
import Projects from './Page/Projects';
import ProjectDetails from './Page/ProjectView';



function App() {
  return (
    <Router>
      <Topbar />
      <Navbar/>     
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/Portfolio" element={< Aboutus/>} />
        <Route path="/contact-us" element={< Contactus/>} />
        <Route path="/project" element={<Projects/>} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
