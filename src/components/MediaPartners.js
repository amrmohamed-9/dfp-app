import React from "react";
import "./css/MediaPartners.css";

const partners = [
  { src: "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392528/AL_NAHAR_TV_NEW_LOGO_qy6d61.png", width: 170, alt: "AL Nahar TV", className: "black" },
  { src: "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392528/%D8%B5%D9%86%D8%A7%D8%B9_%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%85%D8%A9_logo_qaozln.png", width: 140, alt: "صناع العاصمة", className: "black" },
  { src: "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392526/reality_s4o9sm.png", width: 140, alt: "Reality Catalogue", className: "black" },
  { src: "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392536/eemirates-logo-h_d25npz.png", width: 170, alt: "E-Emirates", className: "black" },
  { src: "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392538/img23_jrufaq.png", width: 170, alt: "Tickets Mall", className: "white" },
  { src: "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392525/property_plus_ploe67.png", width: 170, alt: "Property Plus", className: "white" },
  { src: "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392536/emasr-logo-h_bbfeck.png", width: 170, alt: "E-Masr", className: "white" },
  { src: "https://res.cloudinary.com/dxoongqsw/image/upload/v1742392542/nafeza_ko0crf.png", width: 170,  alt: "Nafeza", className: "white" }
];

const MediaPartners = React.memo(() => {
  return (
    <section className="media-partners" id="media-partners">
      {/* <div className="container"> */}
        <h2 className="text-center font-q">Media Partners</h2>
        <div className="partners-wrapper text-center">
          {partners.map((partner) => (
            <div key={partner.alt} className={`partner ${partner.className || ""}`}>
              <img
                src={partner.src}
                width={partner.width}
                height={partner.height}
                alt={partner.alt}
                className="my-3"
                loading="lazy"
              />
              {/* <span></span>
              <span></span> */}
            </div>
          ))}
        </div>
      {/* </div> */}
    </section>
  );
});

export default MediaPartners;
