
import './css/ConferenceLogo.css';
import Spline from '@splinetool/react-spline';

function ConferenceLogo() {
    const logoNew = "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392534/colored_tsmcfw.png"
    const slogan = "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392525/slogan_bdmvgy.png"
    const logoHotel = "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392536/hotel_ubcvj4.png"
    return (
        <section className='conference-logo' id='conference'>
            <div className='icon-3d'>
                <Spline scene="https://prod.spline.design/WoghMzMEqzCfWM79/scene.splinecode" />
            </div>
            <div className='text-center d-flex flex-column align-items-center' style={{zIndex:"15",position:"relative"}} data-aos="fade-down"> 
                <img src={logoNew} className='logo' alt='new gen' />
                <img src={slogan}  className='slogan' alt='new gen' />
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