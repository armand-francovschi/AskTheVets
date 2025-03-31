import React, { useEffect } from "react";
import "./FAQ.css";

const FAQ = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible");
                    }
                });
            },
            { threshold: 0.2 } // Trigger when 20% of the element is visible
        );

        const elements = document.querySelectorAll(".faq-bubble");
        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);

    return (
        <div className="faq-container">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-grid">
                {/* First Conversation */}
                <div className="faq-conversation">
                    <div className="faq-bubble question left">How do I schedule a vet appointment?</div>
                    <div className="faq-bubble answer right">You can schedule an appointment by visiting our online booking page.</div>
                </div>

                {/* Second Conversation */}
                <div className="faq-conversation">
                    <div className="faq-bubble question left">What services do you offer?</div>
                    <div className="faq-bubble answer right">We offer virtual consultations, emergency care, vaccinations, and wellness checkups.</div>
                </div>

                {/* Third Conversation */}
                <div className="faq-conversation">
                    <div className="faq-bubble question left">Is telemedicine available for all pets?</div>
                    <div className="faq-bubble answer right">Yes! We offer telemedicine services for dogs, cats, and other small animals.</div>
                </div>
                <p>You can visit our forum for more information, or share information with other users</p>
                <button className="buton-sex">
                    Visit our forum!
                </button>
            </div>
        </div>
    );
};

export default FAQ;
