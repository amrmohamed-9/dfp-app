import './css/AppFooter.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaYoutube ,FaWhatsapp } from 'react-icons/fa';
import logo from '../imgs/White.png'
function AppFooter() {
    return (
        <footer className="footer py-4" id="contact">
            <div className="container d-flex flex-column flex-md-row">
                <div className="footer-logo">
                    <img src={logo} width={250} alt='Digital future pioneers' loading='lazy'/>
                </div>
                <div className="footer-social d-flex flex-column">
                    <h1 className='mb-3 font-q'>Contact Us</h1>
                    <div className='contact-cont d-flex flex-column flex-md-row flex-lg-row'>
                        <div className='icon-cont'> 
                            <a href="https://www.facebook.com/people/Digital-Future-Pioneers/61573033019540/?rdid=crjdmt3IXc38rWY2&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F15KXnSn6Py%252F" target="_blank" className="text-white me-2 social-icon" rel="noreferrer"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/neogenglobal?igsh=Ym9hczB5bjU0a2Qy" target="_blank" className="text-white me-2 social-icon" rel="noreferrer"><FaInstagram /></a>
                            <a href="/#" className="text-white me-2 social-icon"><FaLinkedinIn /></a>
                            <a href="/#" className="text-white me-2 social-icon"><FaYoutube /></a>
                            <a href="https://wa.me/message/3YR32IVMT2OPE1" target="_blank" className="text-white me-2 social-icon" rel='noopener noreferrer'><FaWhatsapp /></a>
                        </div>
                        <div className='contact-info '>
                            <p className='m-0 p-0'>Mobile: +20 127 306 1112</p>
                            <p className='m-0 p-0'>Email: info@dfp.global</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-top pt-4 copyrights'>
                <p className="text-center m-0 ">&copy; 2025 DFP. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default AppFooter; 
