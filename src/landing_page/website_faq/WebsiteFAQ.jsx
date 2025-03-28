import React, { useState } from "react";
import "./WebsiteFAQ.css";
import VeterinaryImage from "/Veterinary-pana.svg";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
    {
        question: "How do I make an appointment?",
        answer: "You can make an appointment by visiting our booking page and selecting a suitable date and time. Alternatively, you can call our support team.",
    },
    {
        question: "What are your operating hours?",
        answer: "We are open from Monday to Friday, 9 AM - 6 PM. Weekend appointments are available upon request.",
    },
    {
        question: "Do you offer virtual consultations?",
        answer: "Yes, we offer virtual consultations via Zoom or Skype. Please book in advance to secure a slot.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers. Payment details will be provided during the booking process.",
    },
];

const WebsiteFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-bg">
            <div className="faq-container-wrapper">
                <div className="faq-container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-list">
                        {faqData.map((item, index) => (
                            <div key={index} className="faq-item">
                                <motion.div
                                    className={`faq-question ${activeIndex === index ? "active" : ""}`}
                                    onClick={() => toggleFAQ(index)}
                                    initial={{ scale: 1 }}
                                    animate={{ scale: activeIndex === index ? 1.05 : 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {item.question}
                                </motion.div>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            className="faq-answer"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            {item.answer}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="faq-image-wrapper">
                    <img src={VeterinaryImage} alt="Veterinary illustration" className="faq-image" />
                </div>
            </div>
            <div className="contact-section">
                <h3>For more information, or further assistance and questions, do not hesitate to reach out:</h3>
                <p>Email: contact@vetclinic.com</p>
                <p>Phone: +1 234 567 890</p>
                <p>Follow us on social media: @VetClinic</p>
            </div>
        </div>
    );
};

export default WebsiteFAQ;
