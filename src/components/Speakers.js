import { useEffect } from "react";
import { useLocation } from "react-router";
import "./css/Speakers.css";
import Atom from "./Atom";

// رابط Cloudinary الأساسي

const speakers = [
  { id: 1, img: `https://res.cloudinary.com/dxoongqsw/image/upload/v1742392536/Eng_Alaa_xiqvdf.jpg`, name: "Eng. Alaa El Sayed", title: "Founder and CEO Voom" ,width:190},
  { id: 2, img: `https://res.cloudinary.com/dxoongqsw/image/upload/v1742392539/eng_xbzoeo.png`, name: "Dr. Abd El Rahman Khalil", title: "Business Development & Management Consultant" ,width:175 },
  { id: 3, img: `https://res.cloudinary.com/dxoongqsw/image/upload/v1742392542/Mr.Mohamed_El_Sakrawy_zfgwfl.png`, name: "Mr. Mohamed El Sakrawy", title: "VP Dotshub" ,width:190 },
  { id: 4, img: `https://res.cloudinary.com/dxoongqsw/image/upload/v1742392534/arch._owidx5.png`, name: "Arch.Dr. Hesham Mohammed AlQassim", title: "CEO Lecon" ,width:270 },
  { id: 5, img: `https://res.cloudinary.com/dxoongqsw/image/upload/v1742392535/Dr.Mohamed_Kholief_m4adpg.png`, name: "Dr. Mohamed Kholief", title: "Digital Transformation Consultant, Innovation Management & AI Integration Expert" ,width:190 },
];

function Speakers() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#speakers") {
      const element = document.getElementById("speakers");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section className="speakers" id="speakers">
      <div className="left-bottom">
        <Atom />
      </div>
      <div className="right-top">
        <Atom />
      </div>
      <div className="container">
        <h1 className="text-center mb-4 font-q">Speakers</h1>
        <div className="speakers-container">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="speaker-card">
              <div className="spkr-img-container">
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  width={speaker.width}
                  className="speaker-img"
                  loading="lazy"
                />
              </div>
              <h3>{speaker.name}</h3>
              <h6 className="text-black-50 text-capitalize">{speaker.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speakers;
