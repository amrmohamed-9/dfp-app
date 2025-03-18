import './css/Conference.css';
import vid from '../imgs/Smart City..mp4'


function Conference() {
    return (
        <section className="conference">
            <div className='container'>
                    
                <div className="conference-content">
                    <div className="conference-about col-6 pe-lg-4" data-aos="fade-right">
                        <p className='fs-3 m-0 font-q'  data-aos="fade-right">The Future of Real Estate Technology</p>
                        <p  data-aos="fade-right">
                            The PropTech and Sustainable Smart Cities Conference is one of the first conferences in Egypt dedicated to real estate technology.
                        </p>
                        <p  data-aos="fade-right">
                            It features panel discussions, workshops, and expert speakers from both the Government and private sectors, as well as related industries.
                        </p>
                        <p  data-aos="fade-right">
                            The conference aims to raise awareness about PropTech in Egypt and globally, highlighting its importance in accelerating real estate project marketing, increasing sales, attracting foreign investments, and helping companies export real estate projects.
                        </p>
                        <p  data-aos="fade-right">
                            This is achieved by leveraging cutting-edge technologies such as artificial intelligence, virtual reality, 3D technology, the Internet of Things, and digital transformation. Additionally, the conference promotes sustainable smart cities in Egypt and GCC.
                        </p>
                    </div>
                    <div className='vid'>
                        <video src={vid} width={"100%"} controls loop muted autoPlay/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Conference;