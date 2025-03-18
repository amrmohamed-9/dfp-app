import { Link } from 'react-router'; 
import img from '../imgs/icons/bg.jpg';
import './css/Tags.css';

function Tags() {
    return (
        <section className="tags-section">
            <div className='container d-flex flex-wrap align-items-center justify-content-between'>
                <div className='tags-img'>
                    <img src={img} alt='Target Audience' />
                </div>
                <div className='open-text text-black' data-aos="fade-left">
                    <h3 className='font-q'>Target Audience</h3>
                    <p>In Egypt, the adoption of PropTech initiatives is growing, driven by the government's Vision 2030 and the need for sustainable urban development.</p>
                    <p>By collaborating across the related sectors using property technology, Egypt can accelerate its transition to a digitally enabled, sustainable urban future.</p>
                    <div className='more-btn'>
                        <Link to='/sectors'>Read More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tags;
