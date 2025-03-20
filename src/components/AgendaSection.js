import React, { useEffect, useState, useCallback, useMemo } from 'react';
import './css/AgendaSection.css';
import StickyBox from 'react-sticky-box';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AgendaTopics = () => {
  const [isStickyEnabled, setIsStickyEnabled] = useState(window.innerWidth > 768);

  // قائمة المواضيع يتم إنشاؤها مرة واحدة فقط باستخدام useMemo
  const topics = useMemo(() => [
    { title: "Emerging trends in prop tech", description: "Discussing the latest innovations in property technology." },
    { title: "Sustainability and green tech in the real estate sector", description: "Exploring eco-friendly technologies in real estate." },
    { title: "Data-Driven decision making", description: "How data shapes better decisions in real estate." },
    { title: "The digital transformation of property management", description: "Adapting property management to the digital era." },
    { title: "Innovation in commercial real estate", description: "New ideas transforming commercial real estate." },
    { title: "Financing and investment in prop Tech", description: "Understanding investment trends in property technology." },
    { title: "Smart cities and infrastructure", description: "The future of urban planning with smart infrastructure." },
    { title: "Construction tech and building innovation", description: "Innovative technologies reshaping construction." },
    { title: "The role of AI and automation", description: "How AI and automation are influencing real estate." },
    { title: "Real estate cyber security challenge", description: "Addressing cybersecurity challenges in real estate." },
    { title: "The Artificial Intelligence of Things (AIoT)", description: "Combination of (AI)  with (IoT) infrastructure to improve human-machine interactions." }
  ], []);

  // تحديث حالة StickyBox فقط عند تغير حجم الشاشة
  const handleResize = useCallback(() => {
    const shouldEnableSticky = window.innerWidth > 768;
    if (shouldEnableSticky !== isStickyEnabled) {
      setIsStickyEnabled(shouldEnableSticky);
    }
  }, [isStickyEnabled]);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      mirror: true,
      once: false,
      anchorPlacement: 'top-bottom',
    });

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <section className="agenda-section" id='agenda'>
      <div className='container agenda-container d-flex flex-wrap'>

        {isStickyEnabled ? (
          <StickyBox offsetTop={250} offsetBottom={150} className='left-side col-12 col-md-6'>
            <h2 className="mb-4 font-q digital-text">Agenda Topics</h2>
            <p className="mb-5 fs-5 text-capitalize font-q">Prop tech, Digital Twin & Smart Cities Sustainability</p>
          </StickyBox>
        ) : (
          <div className="left-side col-12 col-md-6">
            <h2 className="mb-4 font-q">Agenda Topics</h2>
            <p className="mb-5 fs-5 text-capitalize font-q">Prop tech & Smart Cities Sustainability</p>
          </div>
        )}

        <div className="row col-12 col-md-6 cards-container">
          {topics.map((topic, index) => (
            <div key={index} className="mb-4 col-12 text-center">
              <div className="card topic-card glass-effect shadow-sm col-12 " data-aos="fade-down">
                <div className="card-body">
                  <h5 className="card-title glow-text text-capitalize">{topic.title}</h5>
                  <p className="card-text text-capitalize">{topic.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AgendaTopics;
