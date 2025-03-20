import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router';
import { useMemo } from 'react';
import './css/AboutDfp.css';



function AboutDfp() {
    const imageSlides = useMemo(() => [
        "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392539/img3_eebajf.jpg",
        "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392539/img4_s71sto.jpg",
        "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392447/3_w4zsir.jpg",
        "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392446/1_1_fmwqzu.jpg",
        "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392445/4_ectfo7.jpg",
        "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392444/5_qszozv.jpg"
    ], []);
    return (
        <section className="about-dfp">
            <div className="container">
                <div className="about-cont">
                    <div className="text-box my-3 col-12 col-md-6 col-lg-6" data-aos="fade-right">
                        <h2 className="mt-3">Who We Are?</h2>
                        <p className="text-capitalize">
                            We are dedicated to transforming technology conferences into unparalleled 
                            experiences that not only highlight innovations but also inspire growth and connection within the 
                            industry.
                        </p>
                        <div className="more-btn">
                            <Link to="/about">Read More</Link>
                        </div>
                    </div>
                    <div className="slider col-12 col-md-6 col-lg-6">
                        <Swiper
                            modules={[Autoplay, Pagination, Mousewheel]}
                            spaceBetween={20}
                            slidesPerView={1}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            pagination={{ clickable: true, type: 'bullets' }}
                            mousewheel={false}
                            grabCursor={true}
                            loop={true}
                            lazyPreloadPrevNext={1} // تحسين تحميل الصور
                            className="d-flex align-items-center justify-content-center text-center"
                        >
                            {imageSlides.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={img} alt={`Slide ${index + 1}`} width="100%" className="slide-img" loading="lazy" />
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