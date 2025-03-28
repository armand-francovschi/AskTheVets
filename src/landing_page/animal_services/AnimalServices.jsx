import React, { useState } from "react";
import "./AnimalServices.css";

const services = [
    { name: "Pet Sitting", image: "https://c8.alamy.com/comp/2CCDWGP/dog-sitter-logo-in-drawing-style-on-white-background-for-highlight-walking-pet-in-carriage-icon-vector-isolated-element-zoo-transportation-flat-illustration-funny-animal-care-business-concept-art-2CCDWGP.jpg" },
    { name: "Pet Grooming", image: "https://img.freepik.com/free-vector/pet-care-concept-illustration_114360-9429.jpg" },
    { name: "Pet Walking", image: "https://media.istockphoto.com/id/1344876405/vector/young-woman-walking-dog.jpg?s=612x612&w=0&k=20&c=SZ-CgV9EEr9vSvMBAJUTpspTVEV78s55jsz0-yu5Zzk=" },
];

const AnimalServices = () => {
    const [popup, setPopup] = useState(null);

    return (
        <div className="animal-services">
            <h2 className="services-title">Servicii pentru animale</h2>
            <div className="services3-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="image-container" onClick={() => setPopup(service.name)}>
                            <img src={service.image} alt={service.name} className="service-image" />
                        </div>
                        <h3>{service.name}</h3>
                    </div>
                ))}
            </div>

            {/* Popup */}
            {popup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h3>{popup}</h3>
                        <p>More details coming soon!</p>
                        <button className="close-btn" onClick={() => setPopup(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnimalServices;
