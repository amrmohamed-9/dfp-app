import './css/TargetAudience.css';
import img1 from '../imgs/icons/realest.png';
import img2 from '../imgs/icons/gov it tech.png';
import img3 from '../imgs/icons/IT Tech.png';
import img4 from '../imgs/icons/energy-removebg-preview.png';
import img5 from '../imgs/icons/trans.png';
import img6 from '../imgs/icons/finance-removebg-preview.png';
import img7 from '../imgs/icons/tour.png';
import img8 from '../imgs/icons/startup.png';
// import Spline from '@splinetool/react-spline';
import img from '../imgs/slogan.png'

function TargetAudience() {
    window.scrollTo(0, 0);

    const services = [
        { 
            icon: img1, 
            title: "Real Estate Sector", 
            sections: [
                { header: "Property Developers:", description: "Integrate PropTech solutions." },
                { header: "Construction Companies:", description: "Use digital twins for project planning." },
                { header: "Property Management:", description: "Implement IoT-based solutions for energy efficiency & security." }
            ]
        },
        { 
            icon: img2, 
            title: "Government Sector", 
            sections: [
                { header: "Urban Planning:", description: "Use digital twins to simulate and plan smart cities, optimizing infrastructure, transportation, and utilities." },
                { header: "Municipalities:", description: "Deploy smart city solutions like smart lighting, waste management, and traffic control systems." }
            ]
        },
        { 
            icon: img3, 
            title: "Technology Services", 
            sections: [
                { header: "Software Developers:", description: "Create platforms for digital twins, IoT integration, and smart city applications." },
                { header: "Data Analytics Firms:", description: "Provide insights for optimizing real estate markets." },
                { header: "Cybersecurity:", description: "Ensure the safety of smart city infrastructure." }
            ]
        },
        { 
            icon: img4, 
            title: "Energy and Utilities", 
            sections: [
                { header: "Renewable Energy Providers:", description: "Integrate smart grids and energy management systems in smart cities." },
                { header: "Utility Companies:", description: "Use digital twins to monitor and optimize water, electricity, and gas distribution." }
            ]
        },
        { 
            icon: img5, 
            title: "Transportation and Logistics", 
            sections: [
                { header: "Public Transport Authorities:", description: "Implement smart mobility solutions like real-time tracking, autonomous vehicles, and traffic management systems." },
                { header: "Logistics Companies:", description: "Use digital twins to optimize supply chains and delivery routes." }
            ]
        },
        { 
            icon: img6, 
            title: "Financial Services", 
            sections: [
                { header: "Banks and Mortgage Providers:", description: "Adopt PropTech for digital mortgage processing and blockchain-based property transactions." },
                { header: "Insurance Companies:", description: "Use digital twins to assess risks and provide tailored insurance products for smart buildings." }
            ]
        },
        { 
            icon: img7, 
            title: "Tourism and Hospitality", 
            sections: [
                { header: "Hotels and Resorts:", description: "Implement smart room systems and IoT-based guest services." },
                { header: "Tourism Authorities:", description: "Use digital twins to enhance visitor experiences and manage heritage sites." }
            ]
        },
        { 
            icon: img8, 
            title: "Tech Start-up Companies", 
            sections: [
                { header: "Technology Innovators:", description: "Bring technology services and products or deliver existing services in new ways." },
                { header: "Market Disruptors:", description: "Intend to grow rapidly by offering something that addresses a particular market gap." }
            ]
        }
    ];

    return (
        <main className="target-page">
            <div className="target-landing">
            <img src={img} alt='About DFP'/>

            </div>
            <section className="what-we-offer">
                <div className="container">
                    <h2 data-aos="fade-up" data-aos-duration="600" className='font-q'>Target Audience</h2>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div className="service-card" key={index}>
                                <div className='img-wrapper'>
                                    <img src={service.icon} alt={service.title} />
                                </div>
                                <div className="content-wrapper">
                                    <h4>{service.title}</h4>
                                    <div className='sections'>
                                        {service.sections.map((section, secIndex) => (
                                            <div key={secIndex}>
                                                <h6>{section.header}</h6>
                                                <p className='m-0 mb-1'>{section.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default TargetAudience;
