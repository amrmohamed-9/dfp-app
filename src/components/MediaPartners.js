import './css/MediaPartners.css'
import img1 from '../imgs/صناع العاصمة logo.png'
import img2 from '../imgs/AL_NAHAR_TV_NEW_LOGO.png'
import img3 from '../imgs/img23.png'
import img4 from '../imgs/property plus.jpeg'
function MediaPartners(){
    return(
        <section className='media-partners' id='media-partners'>
            <div className="container">
                <h2 className='text-center font-q'>Media Partners</h2>
                <div className="partners-wrapper text-center">
                    <div >
                        <img src={img2} width={270} alt='AL Nahar TV' className='my-3'/>
                    </div>
                    <div > 
                        <img src={img1} width={230} alt='صناع العاصمة' className='my-3'/>
                    </div>
                    <div className='last'>
                        <img src={img3} alt='Tickets Mall' className='my-3'/>
                    </div>
                    <div className='last'  >
                        <img src={img4} alt='Tickets Mall' className='my-3'/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MediaPartners