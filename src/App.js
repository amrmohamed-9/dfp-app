import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from "react-router";
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
  const bgVid = "https://res.cloudinary.com/dxoongqsw/video/upload/v1742471984/0218_wwd1hc.mp4"
  return (
    <main>
      <video src={bgVid} playsInline loop muted autoPlay className='bg-video' />
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
