import { useEffect } from 'react';
import { useLocation } from 'react-router';
import imgOne from '../imgs/Eng Alaa.jpeg';
import imgTwo from '../imgs/eng.png';
import imgThree from '../imgs/Mr.Mohamed El Sakrawy.png';

import './css/Speakers.css';
import Atom from './Atom';

function Speakers() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#speakers') {
            const element = document.getElementById('speakers');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const imgs = [
        { id: 1, img: imgOne, name: "Eng. Alaa El Sayed", title: "CEO Voom" },
        { id: 2, img: imgTwo, name: "Dr.Abd El Rahman Khalil", title: "Business Development & Management Consultant" },
        { id: 3, img: imgThree, name: "Mr.Mohamed El Sakrawy", title: " VP Dotshub" },
    ];

    return (
        <section className="speakers" id="speakers">
            <div className='left-bottom'>
                <Atom/>
            </div>
            <div className='right-top'>
                <Atom/>
            </div>
            <div className="container">
                <h1 className="text-center mb-4 font-q">Speakers</h1>
                <div className="speakers-container">
                    {imgs.map((speaker) => (
                        <div key={speaker.id} className="speaker-card">
                            <img src={speaker.img} alt={speaker.name} className="speaker-img" loading='lazy'/>
                            <h4>{speaker.name}</h4>
                            <h6 className="text-black-50 text-capitalize">{speaker.title}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Speakers;
