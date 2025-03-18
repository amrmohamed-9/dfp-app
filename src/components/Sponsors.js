import voom from '../imgs/LOGO-WHITE.png'
// import voom from '../imgs/voom logo.png'
import './css/Sponsors.css'

function Sponsors(){
    return(
        <section className='sponsors' id="sponsors">
            <div className="container">
                <div className='main-partner text-center'>
                    <h2 className='font-q'>Main Sponsor</h2>
                    <div className='sponsor-img'>
                        <a href='https://voomglobal.com/' target='_blank' rel="noreferrer"><img src={voom} width={400} alt='voom global' className='my-3' loading='lazy'/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors