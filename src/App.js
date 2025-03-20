import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from "react-router";
import vidBg from './imgs/0218.mp4';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppNavbar from './components/AppNavbar.js';
const AppFooter = lazy(() => import('./components/AppFooter.js'));
const Home = lazy(() => import("./Pages/Home.js"));
const About = lazy(() => import("./Pages/About.js"));
const TargetAudience = lazy(() => import("./Pages/TargetAudience.js"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true      
    });
  }, []);
  
  return (
    <main>
      <video src={vidBg} playsInline loop muted autoPlay className='bg-video' />
      <AppNavbar />
      <Suspense fallback={<div style={{ height: "100vh" }}></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sectors" element={<TargetAudience />} />
        </Routes>
        <AppFooter />
      </Suspense>
    </main>
  );
}

export default App;
