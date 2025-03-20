import "./css/About.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imgOne =
    "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392526/vision6_f3otpn.jpg";
  const imgTwo =
    "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392542/mission1_3_kgvfi5.jpg";

return (
    <main className="about-page">
        <section className="about-landing">
            <h2 className="text-capitalize font-q text-center">
            Innovating spaces for a new generation
            </h2>
        </section>

        <section className="vision">
            <div className="container">
            <div className="about-content">
                <div className="col-12 col-md-6">
                    <h1 data-aos="fade-right">OUR VISION</h1>
                    <p data-aos="fade-right">
                        To be the leading events management company and interactive
                        marketing agency in the tech sectors, recognized for our
                        innovative strategies and commitment to creating impactful
                        experiences that elevate industry standards and foster lasting
                        connections.
                    </p>
                </div>
                <div className="col-12 col-md-6">
                <img
                    src={imgOne}
                    width="100%"
                    alt="Our Vision"
                    data-aos="fade-left"
                    loading="lazy"
                    decoding="async"
                />
                </div>
            </div>
            </div>
        </section>
        <section className="mission">
            <div className="container">
            <div className="about-content">
                <div className="col-12 col-md-6">
                <img
                    src={imgTwo}
                    width="100%"
                    alt="Our Mission"
                    data-aos="fade-right"
                    loading="lazy"
                    decoding="async"
                />
                </div>
                <div className="col-12 col-md-6 mission-content">
                <h1 data-aos="fade-left">OUR MISSION</h1>
                <p data-aos="fade-left">
                    Spreading awareness and supporting the importance of using
                    modern technology by organizing innovative specialized
                    conferences, workshops, and discussion sessions between the
                    government sector and the private sector to achieve the state’s
                    goal in Egypt for digital transformation and contributing to
                    attracting foreign investments and exporting Egyptian projects
                    related to virtual reality, artificial intelligence, metaverse,
                    and providing remote services in addition to supporting emerging
                    innovation companies.
                    </p>
                    </div>
                </div>
                </div>
            </section>
        </main>
    );
}

export default About;
