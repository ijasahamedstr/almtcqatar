import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from "./Page/Topbar";
import Navbar from './Page/Navbar';
import Footer from './Page/Footer';
import Home from './Page/Home';
import Aboutus from './Page/About Us';



function App() {
  return (
    <Router>
      <Topbar />
      <Navbar/>     
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/Portfolio" element={< Aboutus/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
