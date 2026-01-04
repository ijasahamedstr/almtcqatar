import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Topbar from "./Page/Topbar";
import Navbar from './Page/Navbar';
import Footer from './Page/Footer';
import Home from './Page/Home';
import Aboutus from './Page/About Us';
import Contactus from './Page/contact-us';
import ExpertiseDetails from './Page/ExpertiseView';
import ExpertiseAll from './Page/ExpertiseAll';
import ProjectView from './Page/ProjectView';
import Projectall from './Page/Projectsall';

function App() {
  const [loading, setLoading] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Al Mubthadieen Trading & Contracting (MTC)";

  // Loader Timer - Adjusted to 7s to accommodate larger printing
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000); 
    return () => clearTimeout(timer);
  }, []);

  // 01 by 01 Printing Logic
  useEffect(() => {
    if (loading && displayText.length < fullText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 90); // Slightly faster printing for larger text
      return () => clearTimeout(typingTimer);
    }
  }, [displayText, loading]);

  return (
    <>
      <style>
        {`
          .preloader-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999999;
          }

          .preloader-container {
            position: relative;
            width: 350px; 
            height: 350px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .circle-loader {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid rgba(0, 0, 0, 0.03);
            border-top: 3px solid #d4af37; 
            border-bottom: 3px solid #d4af37;
            animation: spin-around 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }

          .flash-logo-medium {
            width: 250px;
            height: auto;
            z-index: 10;
            filter: drop-shadow(0px 10px 20px rgba(0,0,0,0.08)); 
          }

          /* --- BIG 3D WALL TEXT STYLE --- */
          .loading-status-text {
            margin-top: 50px;
            font-family: 'Montserrat', 'Segoe UI', sans-serif;
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 22px; /* INCREASED SIZE */
            color: #d4af37;
            font-weight: 500;
            text-align: center;
            min-height: 30px;
            padding: 0 20px;
            
            /* Enhanced 3D Wall Shadow for Larger Text */
            text-shadow: 
              1px 1px 0px #b8952d,
              2px 2px 0px #a18228,
              3px 3px 0px #8a6f22,
              5px 5px 8px rgba(0,0,0,0.2);
          }

          .cursor-blink {
            display: inline-block;
            width: 3px;
            height: 24px;
            background-color: #d4af37;
            margin-left: 8px;
            vertical-align: middle;
            animation: blink-animation 0.8s infinite;
          }

          @keyframes blink-animation {
            50% { opacity: 0; }
          }

          @keyframes spin-around {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .site-entrance-reveal {
            animation: finalFade 1.2s ease-in-out;
          }

          @keyframes finalFade {
            from { opacity: 0; filter: blur(10px); }
            to { opacity: 1; filter: blur(0px); }
          }
        `}
      </style>

      {loading ? (
        <div className="preloader-wrapper">
          <div className="preloader-container">
            <div className="circle-loader"></div>
            <img 
              src="https://i.ibb.co/cK5RvPG7/Gemini-Generated-Image-70xztx70xztx70xz-removebg-preview.png" 
              alt="MTC Logo" 
              className="flash-logo-medium"
            />
          </div>
          
          <div className="loading-status-text">
            {displayText}<span className="cursor-blink"></span>
          </div>
        </div>
      ) : (
        <div className="site-entrance-reveal">
          <Router>
            <Topbar />
            <Navbar />    
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Portfolio" element={<Aboutus />} />
              <Route path="/contact-us" element={<Contactus />} />
              <Route path="/projects" element={<Projectall />} />
              <Route path="/projects/:slug" element={<ProjectView />} />
              <Route path="/Expertise/:slug" element={<ExpertiseDetails />} />
              <Route path="/Expertise" element={<ExpertiseAll />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;