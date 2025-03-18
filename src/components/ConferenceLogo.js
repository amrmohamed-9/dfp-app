import img from '../imgs/slogan.png';
import logoCon from '../imgs/colored.png';
import logoHotel from '../imgs/hotel.png';
import './css/ConferenceLogo.css';
import Spline from '@splinetool/react-spline';

function ConferenceLogo() {
    return (
        <section className='conference-logo' id='conference'>
            <div className='icon-3d'>
                <Spline scene="https://prod.spline.design/WoghMzMEqzCfWM79/scene.splinecode" />
                {/* <iframe src='https://my.spline.design/robotfollowcursorforlandingpage-b03a6c82661997dc23cc58a0937d258f/' frameborder='0' width='100%' height='100%'></iframe> */}
            </div>
            <div className='text-center d-flex flex-column align-items-center' style={{zIndex:"15",position:"relative"}} data-aos="fade-down"> 
                <img src={logoCon} className='logo' alt='new gen' />
                <img src={img}  className='slogan' alt='new gen' />
            </div>
            <div className='subject-wrapper text-center'>
                <div className='hotel'>
                    <img src={logoHotel} width={200} alt='Stregis' />
                    <p className='text-white my-2'>New Capital</p>
                </div>
                <div className='subject'>
                    <h3 className='font-q'>Prop Tech</h3>
                    <h5 className='font-q'>Digital Twin & Smart Cities Sustainability Conference</h5>
                </div>
            </div>
        </section>
    );
}

export default ConferenceLogo;