
import './css/Sponsors.css'

function Sponsors(){
    const logoVoom = "https://res.cloudinary.com/dxoongqsw/image/upload/v1742472626/logonew_vduwic.png"
    const logoLv = "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392539/LV03_sdvuml.png"
    return(
        <section className='sponsors' id="sponsors">
            <div className="container">
                <div className='main-partner text-center'>
                    <h2 className='font-q'>Main Sponsor</h2>
                    <div className='sponsor-img'>
                        <a href='https://voomglobal.com/' target='_blank' rel="noreferrer"><img src={logoVoom} width={210} alt='voom global' className='my-3' loading='lazy'/></a>
                    </div>
                    <h2 className='font-q mt-5'>Gold Sponsor</h2>
                    <div className='sponsor-img'>
                    <a href='https://www.facebook.com/Leconcompany/' target='_blank' rel="noreferrer"><img src={logoLv}  alt='voom global' width={170} className='my-3' loading='lazy'/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors