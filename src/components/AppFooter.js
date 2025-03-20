import './css/AppFooter.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { useMemo } from 'react';

function AppFooter() {
    const socialLinks = useMemo(() => [
        { href: "https://www.facebook.com/people/Digital-Future-Pioneers/61573033019540/?rdid=crjdmt3IXc38rWY2&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F15KXnSn6Py%252F", icon: <FaFacebookF /> },
        { href: "https://www.instagram.com/neogenglobal?igsh=Ym9hczB5bjU0a2Qy", icon: <FaInstagram /> },
        { href: "https://www.linkedin.com/company/digital-future-pioneers/", icon: <FaLinkedinIn /> },
        { href: "/#", icon: <FaYoutube /> },
        { href: "https://wa.me/message/3YR32IVMT2OPE1", icon: <FaWhatsapp /> }
    ], []);
    const logoUrl = "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392526/White_mcz8gk.webp";

    return (
        <footer className="footer py-4" id="contact">
            <div className="container d-flex flex-column flex-md-row">
                <div className="footer-logo">
                    <img src={logoUrl} width={250} alt="Digital future pioneers" loading="lazy" />
                </div>
                <div className="footer-social d-flex flex-column">
                    <h1 className="mb-3 font-q">Contact Us</h1>
                    <div className="contact-cont d-flex flex-column flex-md-row flex-lg-row">
                        <div className="icon-cont">
                            {socialLinks.map((social, index) => (
                                <a key={index} href={social.href} target="_blank" className="text-white me-2 social-icon" rel="noopener noreferrer">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <div className="contact-info">
                            <p className="m-0 p-0">Mobile: +20 127 306 1112</p>
                            <p className="m-0 p-0">Email: info@dfp.global</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-top pt-4 copyrights">
                <p className="text-center m-0">&copy; 2025 DFP. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default AppFooter;
