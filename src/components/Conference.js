import React, { useEffect } from 'react';
import './css/Conference.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Conference() {
    useEffect(() => {
        AOS.init({ duration: 1500, once: false, mirror: true });
    }, []);
    const vid = "https://res.cloudinary.com/dxoongqsw/video/upload/v1742392637/Smart_City._qpb5no.mp4"
    return (
        <section className="conference">
            <div className="container">
                <div className="conference-content">
                    <div className="conference-about col-12 col-md-6 pe-lg-4" data-aos="fade-right">
                        <p className="fs-3 m-0 font-q">The Future of Real Estate Technology</p>
                        <p>
                            The PropTech and Sustainable Smart Cities Conference is one of the first conferences in Egypt dedicated to real estate technology.
                        </p>
                        <p>
                            It features panel discussions, workshops, and expert speakers from both the Government and private sectors, as well as related industries.
                        </p>
                        <p>
                            The conference aims to raise awareness about PropTech in Egypt and globally, highlighting its importance in accelerating real estate project marketing, increasing sales, attracting foreign investments, and helping companies export real estate projects.
                        </p>
                        <p>
                            This is achieved by leveraging cutting-edge technologies such as artificial intelligence, virtual reality, 3D technology, the Internet of Things, and digital transformation. Additionally, the conference promotes sustainable smart cities in Egypt and GCC.
                        </p>
                    </div>

                    <div className="vid">
                        <video 
                            src={vid} 
                            width="100%" 
                            controls 
                            loop 
                            muted 
                            autoPlay 
                            preload="auto"
                            playsInline
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Conference;
