import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import imgOne from '../imgs/1 (1).jpg';
import imgTwo from '../imgs/3.jpg';
import imgThree from '../imgs/4.jpg';
import imgFour from '../imgs/5.jpg';
import imgFive from '../imgs/img3.jpg';
import imgSex from '../imgs/img4.jpg';
import './css/AboutDfp.css';
import { Link } from 'react-router';

function AboutDfp() {
    const imageSlides = [
        { id: 1, img: imgOne },
        { id: 2, img: imgTwo },
        { id: 3, img: imgThree },
        { id: 4, img: imgFour },
        { id: 5, img: imgFive },
        { id: 6, img: imgSex },
    ];

    return (
        <section className="about-dfp">
            <div className='container'>
                <div className="about-cont">
                    <div className="text-box my-3 col-12 col-md-6 col-lg-6" data-aos="fade-right">
                        <h2 className="mt-3">Who We Are?</h2>
                        <p className="text-capitalize">
                            We are dedicated to transforming technology conferences into unparalleled 
                            experiences that not only highlight innovations but also inspire growth and connection within the 
                            industry.
                        </p>
                        <div className='more-btn' data-aos="fade-right">
                            <Link to='/about'>Read More</Link>
                        </div>
                    </div>
                    <div className='slider col-12 col-md-6 col-lg-6'>
                        <Swiper
                            modules={[Autoplay, Pagination, Mousewheel]}
                            spaceBetween={20}
                            slidesPerView={1}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false
                            }}
                            pagination={{
                                clickable: true,
                                type: 'bullets'
                            }}
                            mousewheel={false}
                            grabCursor={true}
                            loop={true}
                            className="d-flex align-items-center justify-content-center text-center"
                        >
                            {imageSlides.map((slide) => (
                                <SwiperSlide key={slide.id} >
                                    <img src={slide.img} alt={`Slide ${slide.id}`} width={"100%"} className="slide-img" loading='lazy' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutDfp;