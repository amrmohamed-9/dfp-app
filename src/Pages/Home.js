import Landing from '../components/Landing.js';
import Conference from '../components/Conference.js';
import AboutDfp from '../components/AboutDfp.js'
import  Quote from '../components/Quote'
import AgendaSection from '../components/AgendaSection.js';
import Speakers from '../components/Speakers.js';
import Sponsors from '../components/Sponsors.js';
import MediaPartners from '../components/MediaPartners.js'
import Form from '../components/Form.js';
import ScrollToTop from '../components/ScrollToTop.js';
import ConferenceLogo from '../components/ConferenceLogo.js';
import Tags from '../components/Tags.js';
import { useEffect } from 'react';
function Home(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <main>
            <Landing/>
            <AboutDfp/>
            <Quote/>
            <ConferenceLogo/>
            <Conference/>
            <Tags/>
            <AgendaSection/>
            <Speakers/>
            <Sponsors/>
            <MediaPartners/>
            <Form/>
            <ScrollToTop/>
        </main>
    )
}

export default Home;