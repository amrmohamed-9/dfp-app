import AppNavbar from './components/AppNavbar.js';
import vidBg from './imgs/0218.mp4'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Routes, Route } from "react-router";
// import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { lazy, Suspense, useEffect } from 'react';
import AppFooter from './components/AppFooter.js';
import Spinner from 'react-spinner'
import TargetAudience from './Pages/TargetAudience.js';
const Home = lazy(()=>import("./Pages/Home.js"))
const About = lazy(()=>import("./Pages/About.js"))

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true      
    });
  }, []);
  
  return (
    <main >
      <video src={vidBg} loop muted autoPlay className='bg-video'/>
      <AppNavbar/>
        <Suspense fallback={<div style={{height:"100vh"}}><Spinner/></div>}>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/sectors" element={<TargetAudience />}/>
          </Routes>
        </Suspense>
      <AppFooter/>
    </main>
  );
}

export default App;
